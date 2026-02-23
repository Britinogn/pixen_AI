// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../utils/constant'


if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase env vars — using fallback or check .env / production settings')
  // Or throw only in production: if (import.meta.env.PROD) throw new Error(...)
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error('Missing Supabase environment variables.')
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)