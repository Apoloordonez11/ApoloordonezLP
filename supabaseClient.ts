import { createClient } from '@supabase/supabase-js';

// Access environment variables using Vite's import.meta.env
// We use optional chaining to prevent runtime crashes if import.meta.env is not defined
// We also provide fallback values to ensure the app works even if Env Vars are not yet configured in Vercel

// @ts-ignore
const envUrl = import.meta.env?.VITE_SUPABASE_URL;
// @ts-ignore
const envKey = import.meta.env?.VITE_SUPABASE_ANON_KEY;

// Fallback credentials (from your previous configuration) to prevent app crash
const FALLBACK_URL = 'https://peufhsccthgqzmoacjvv.supabase.co';
const FALLBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldWZoc2NjdGhncXptb2FjanZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MTkyNTIsImV4cCI6MjA4NTk5NTI1Mn0.Fyi1ITDiWVGkaJv6P5MFa6D1tLjUwM_sYYj1HryiHpo';

const supabaseUrl = envUrl || FALLBACK_URL;
const supabaseKey = envKey || FALLBACK_KEY;

if (!envUrl || !envKey) {
  console.warn('⚠️ Running with fallback Supabase credentials. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel for production.');
}

export const supabase = createClient(
  supabaseUrl, 
  supabaseKey
);