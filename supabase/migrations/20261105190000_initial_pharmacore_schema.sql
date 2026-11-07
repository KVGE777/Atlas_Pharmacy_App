create extension if not exists pgcrypto;

do $$
begin
  create type public.staff_role as enum ('admin', 'pharmacist', 'employee', 'salesperson');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.staff_status as enum ('active', 'inactive');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.sale_status as enum ('PAID', 'VOIDED');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.branches (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  address text,
  created_at timestamptz not null default now(),
  unique (organization_id, name)
);

create table if not exists public.staff_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  branch_id uuid references public.branches(id) on delete set null,
  full_name text not null,
  normalized_name text generated always as (lower(regexp_replace(trim(full_name), '\s+', ' ', 'g'))) stored,
  phone text,
  email text,
  role public.staff_role not null default 'salesperson',
  status public.staff_status not null default 'active',
  pin_hash text,
  pin_updated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, normalized_name)
);

create table if not exists public.inventory_items (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  sku text not null,
  generic_name text not null,
  brand_name text not null,
  category text,
  strength text,
  dosage_form text,
  release_type text,
  pack_size text,
  units_per_pack integer not null default 1 check (units_per_pack > 0),
  batch_number text,
  expiry_date date,
  shelf_location text,
  stock_qty numeric(12, 3) not null default 0 check (stock_qty >= 0),
  reorder_level numeric(12, 3) not null default 0 check (reorder_level >= 0),
  cost_price numeric(12, 2) not null default 0 check (cost_price >= 0),
  selling_price numeric(12, 2) not null default 0 check (selling_price >= 0),
  rx_required boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (branch_id, sku)
);

create table if not exists public.sales (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete restrict,
  invoice_number text not null,
  cashier_id uuid references public.staff_profiles(id) on delete set null,
  patient_name text not null default 'Walk-in Patient',
  prescriber_note text,
  payment_method text not null,
  status public.sale_status not null default 'PAID',
  subtotal numeric(12, 2) not null check (subtotal >= 0),
  discount_amount numeric(12, 2) not null default 0 check (discount_amount >= 0),
  total numeric(12, 2) not null check (total >= 0),
  created_at timestamptz not null default now(),
  voided_at timestamptz,
  voided_by uuid references public.staff_profiles(id) on delete set null,
  unique (branch_id, invoice_number)
);

create table if not exists public.sale_lines (
  id uuid primary key default gen_random_uuid(),
  sale_id uuid not null references public.sales(id) on delete cascade,
  inventory_item_id uuid references public.inventory_items(id) on delete set null,
  sku text not null,
  name text not null,
  variant text,
  batch_number text,
  expiry_date date,
  dispense_mode text not null,
  quantity numeric(12, 3) not null check (quantity > 0),
  unit_price numeric(12, 2) not null check (unit_price >= 0),
  line_total numeric(12, 2) not null check (line_total >= 0)
);

create table if not exists public.stock_movements (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  inventory_item_id uuid not null references public.inventory_items(id) on delete restrict,
  quantity_delta numeric(12, 3) not null,
  reason text not null,
  reference_id uuid,
  created_by uuid references public.staff_profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete cascade,
  branch_id uuid references public.branches(id) on delete set null,
  actor_id uuid references public.staff_profiles(id) on delete set null,
  event_type text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists staff_profiles_org_name_idx on public.staff_profiles (organization_id, normalized_name);
create index if not exists inventory_items_branch_idx on public.inventory_items (branch_id);
create index if not exists sales_branch_created_idx on public.sales (branch_id, created_at desc);
create index if not exists stock_movements_item_created_idx on public.stock_movements (inventory_item_id, created_at desc);
create index if not exists audit_events_org_created_idx on public.audit_events (organization_id, created_at desc);

create or replace function public.current_staff_profile()
returns public.staff_profiles
language sql
stable
security definer
set search_path = public
as $$
  select p.* from public.staff_profiles p where p.id = auth.uid() limit 1
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.staff_profiles p
    where p.id = auth.uid() and p.role = 'admin' and p.status = 'active'
  )
$$;

alter table public.organizations enable row level security;
alter table public.branches enable row level security;
alter table public.staff_profiles enable row level security;
alter table public.inventory_items enable row level security;
alter table public.sales enable row level security;
alter table public.sale_lines enable row level security;
alter table public.stock_movements enable row level security;
alter table public.audit_events enable row level security;

grant usage on schema public to authenticated;
grant select on table public.staff_profiles to authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on table public.staff_profiles to service_role;
grant execute on function public.current_staff_profile() to authenticated;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "staff can view own organization" on public.organizations;
create policy "staff can view own organization"
  on public.organizations for select
  using (id = (select organization_id from public.current_staff_profile()));

drop policy if exists "staff can view assigned branches" on public.branches;
create policy "staff can view assigned branches"
  on public.branches for select
  using (organization_id = (select organization_id from public.current_staff_profile()));

drop policy if exists "staff can view organization staff" on public.staff_profiles;
create policy "staff can view organization staff"
  on public.staff_profiles for select
  using (organization_id = (select organization_id from public.current_staff_profile()));

drop policy if exists "admins manage staff" on public.staff_profiles;
create policy "admins manage staff"
  on public.staff_profiles for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "staff can read branch inventory" on public.inventory_items;
create policy "staff can read branch inventory"
  on public.inventory_items for select
  using (branch_id in (select branch_id from public.current_staff_profile()));

drop policy if exists "admins manage inventory" on public.inventory_items;
create policy "admins manage inventory"
  on public.inventory_items for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "staff can read sales" on public.sales;
create policy "staff can read sales"
  on public.sales for select
  using (branch_id in (select branch_id from public.current_staff_profile()));

drop policy if exists "staff can read sale lines" on public.sale_lines;
create policy "staff can read sale lines"
  on public.sale_lines for select
  using (sale_id in (select s.id from public.sales s where s.branch_id in (select branch_id from public.current_staff_profile())));

drop policy if exists "active staff can create sales" on public.sales;
create policy "active staff can create sales"
  on public.sales for insert
  with check (
    branch_id in (select branch_id from public.current_staff_profile())
    and (select status from public.current_staff_profile()) = 'active'
  );

drop policy if exists "active staff can create sale lines" on public.sale_lines;
create policy "active staff can create sale lines"
  on public.sale_lines for insert
  with check (sale_id in (select s.id from public.sales s where s.branch_id in (select branch_id from public.current_staff_profile())));

drop policy if exists "admins manage stock movements" on public.stock_movements;
create policy "admins manage stock movements"
  on public.stock_movements for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "staff can read audit events" on public.audit_events;
create policy "staff can read audit events"
  on public.audit_events for select
  using (organization_id = (select organization_id from public.current_staff_profile()));

drop policy if exists "admins create audit events" on public.audit_events;
create policy "admins create audit events"
  on public.audit_events for insert
  with check (public.is_admin());
