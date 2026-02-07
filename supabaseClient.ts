import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://peufhsccthgqzmoacjvv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldWZoc2NjdGhncXptb2FjanZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MTkyNTIsImV4cCI6MjA4NTk5NTI1Mn0.Fyi1ITDiWVGkaJv6P5MFa6D1tLjUwM_sYYj1HryiHpo';

export const supabase = createClient(supabaseUrl, supabaseKey);