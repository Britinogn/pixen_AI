// src/utils/constants.ts
// export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
// export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string
// export const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY  as string
// export const VITE_HF_API_KEY= import.meta.env.VITE_HF_API_KEY  as string


// src/utils/constants.ts
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string || 'https://tnpgcraofgjtayrnnuai.supabase.co' 
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string || 'your-dev-anon-key'
export const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string || ''
export const VITE_HF_API_KEY = import.meta.env.VITE_HF_API_KEY as string || ''

// Remove the throws — handle in supabaseClient.ts instead

// if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
//     throw new Error('Missing Supabase environment variables.')
// }

// if (!VITE_GEMINI_API_KEY || !VITE_HF_API_KEY) {
//     throw new Error('Missing google api variables.')
// }
