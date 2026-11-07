# Supabase setup

## 1. Create the project

Create a Supabase project and copy its Project URL and anon key into a local `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Never put the service-role key in the React app or commit it to the repository.

## 2. Apply the schema

Install the Supabase CLI, log in, link the project, and apply the migration:

```powershell
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

The migration creates organizations, branches, staff profiles, inventory, sales,
sale lines, stock movements, and audit events, with row-level security policies.

## 3. Bootstrap the administrator

Create the first administrator in Supabase Auth, then insert the matching
`staff_profiles` row with role `admin`, organization, and branch assignment.
Use the Supabase SQL editor for this one-time bootstrap. Do not store a
plaintext PIN in the database.

## 4. Deploy staff management

The Staff page calls the `manage-staff` Edge Function. It creates Auth users,
stores only salted PIN hashes, resets PINs, and changes active status. Deploy
it with the Supabase CLI; the function uses the platform-provided service-role
secret and that secret must not be added to Vite environment variables:

```powershell
supabase functions deploy manage-staff
```

The initial administrator signs in with the email and password created in
Supabase Auth. Sessions are restored automatically by the browser client.

## 5. Deploy PIN authentication

The `authenticate-staff` Edge Function is the server boundary for name + PIN
login. It verifies the salted PIN hash server-side and returns a one-time
Supabase Auth token for the browser to exchange for a session:

```powershell
supabase functions deploy authenticate-staff --no-verify-jwt
```

Deploy both functions after pulling the latest code:

```powershell
supabase functions deploy manage-staff
supabase functions deploy authenticate-staff --no-verify-jwt
```

The browser must never receive the service-role key or raw PIN hashes. Staff
accounts must be created from the Staff access page so their Auth account and
PIN hash are created together.

## 6. Configure Vercel

Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as Vercel environment
variables for Preview and Production, then redeploy.

Until these steps are complete, the app uses its local prototype account
fallback so the UI remains reviewable without pretending that authentication
is production-ready.
