import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

function constantTimeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let result = 0;
  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return result === 0;
}

async function hashPin(pin: string, salt: string) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(`${salt}:${pin}`)
  );
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);

  const { name, pin } = await request.json().catch(() => ({}));
  if (typeof name !== 'string' || typeof pin !== 'string' || !/^\d{4}$/.test(pin)) {
    return jsonResponse({ error: 'Name and a 4-digit PIN are required.' }, 400);
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const adminClient = createClient(supabaseUrl, serviceRoleKey);
  const normalizedName = name.trim().replace(/\s+/g, ' ').toLowerCase();
  const { data: profile } = await adminClient
    .from('staff_profiles')
    .select('id, email, pin_hash, status')
    .eq('normalized_name', normalizedName)
    .maybeSingle();

  if (!profile || profile.status !== 'active' || !profile.email || !profile.pin_hash) {
    return jsonResponse({ error: 'Invalid staff name or PIN.' }, 401);
  }

  const separatorIndex = profile.pin_hash.indexOf(':');
  const salt = separatorIndex > 0 ? profile.pin_hash.slice(0, separatorIndex) : '';
  const expectedHash = separatorIndex > 0 ? profile.pin_hash.slice(separatorIndex + 1) : '';
  const actualHash = salt ? await hashPin(pin, salt) : '';
  if (!salt || !constantTimeEqual(actualHash, expectedHash)) {
    return jsonResponse({ error: 'Invalid staff name or PIN.' }, 401);
  }

  const { data: linkData, error: linkError } = await adminClient.auth.admin.generateLink({
    type: 'magiclink',
    email: profile.email
  });
  const tokenHash = linkData?.properties?.hashed_token;
  if (linkError || !tokenHash) {
    return jsonResponse({ error: 'Could not create a staff session.' }, 500);
  }

  return jsonResponse({ tokenHash, type: 'magiclink' });
});
