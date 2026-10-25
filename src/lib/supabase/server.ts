import { createClient } from '@supabase/supabase-js';
import { isSupabaseConfigured } from './client';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const isSupabaseAdminConfigured = () => {
  return (
    isSupabaseConfigured() &&
    Boolean(supabaseServiceKey) &&
    !supabaseServiceKey.includes('mock')
  );
};

export const supabaseAdmin = isSupabaseAdminConfigured()
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;
