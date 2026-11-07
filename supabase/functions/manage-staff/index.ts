import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

function generatePin() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

async function hashPin(pin: string) {
  const salt = crypto.randomUUID();
  const encoded = new TextEncoder().encode(`${salt}:${pin}`);
  const digest = await crypto.subtle.digest('SHA-256', encoded);
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${salt}:${hash}`;
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);

  const authorization = request.headers.get('Authorization');
  if (!authorization) return jsonResponse({ error: 'Authentication required.' }, 401);

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authorization } }
  });
  const adminClient = createClient(supabaseUrl, serviceRoleKey);

  const { data: { user }, error: userError } = await userClient.auth.getUser();
  if (userError || !user) return jsonResponse({ error: 'Invalid authentication session.' }, 401);

  const { data: adminProfile, error: profileError } = await adminClient
    .from('staff_profiles')
    .select('organization_id, branch_id, role, status')
    .eq('id', user.id)
    .maybeSingle();
  if (profileError || !adminProfile || adminProfile.role !== 'admin' || adminProfile.status !== 'active') {
    return jsonResponse({ error: 'Administrator access is required.' }, 403);
  }

  const body = await request.json().catch(() => ({}));
  const action = body?.action;

  if (action === 'create') {
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const role = body.role;
    if (!fullName || !email || !['salesperson', 'employee', 'pharmacist'].includes(role)) {
      return jsonResponse({ error: 'Full name, email, and a valid staff role are required.' }, 400);
    }

    const pin = generatePin();
    const { data: authUser, error: createUserError } = await adminClient.auth.admin.createUser({
      email,
      password: crypto.randomUUID(),
      email_confirm: true,
      user_metadata: { full_name: fullName }
    });
    if (createUserError || !authUser.user) {
      return jsonResponse({ error: createUserError?.message || 'Could not create the staff login.' }, 400);
    }

    const { error: insertError } = await adminClient.from('staff_profiles').insert({
      id: authUser.user.id,
      organization_id: adminProfile.organization_id,
      branch_id: adminProfile.branch_id,
      full_name: fullName,
      email,
      phone,
      role,
      status: 'active',
      pin_hash: await hashPin(pin),
      pin_updated_at: new Date().toISOString()
    });
    if (insertError) {
      await adminClient.auth.admin.deleteUser(authUser.user.id);
      return jsonResponse({ error: insertError.message }, 400);
    }

    return jsonResponse({ id: authUser.user.id, fullName, pin });
  }

  const memberId = typeof body.memberId === 'string' ? body.memberId : '';
  if (!memberId) return jsonResponse({ error: 'A staff member is required.' }, 400);

  if (action === 'reset-pin') {
    const pin = generatePin();
    const { error } = await adminClient
      .from('staff_profiles')
      .update({ pin_hash: await hashPin(pin), pin_updated_at: new Date().toISOString() })
      .eq('id', memberId)
      .eq('organization_id', adminProfile.organization_id);
    if (error) return jsonResponse({ error: error.message }, 400);
    return jsonResponse({ pin });
  }

  if (action === 'set-status') {
    const status = body.status === 'active' ? 'active' : body.status === 'inactive' ? 'inactive' : null;
    if (!status) return jsonResponse({ error: 'A valid status is required.' }, 400);
    const { error } = await adminClient
      .from('staff_profiles')
      .update({ status })
      .eq('id', memberId)
      .eq('organization_id', adminProfile.organization_id);
    if (error) return jsonResponse({ error: error.message }, 400);
    return jsonResponse({ status });
  }

  return jsonResponse({ error: 'Unsupported staff action.' }, 400);
});
