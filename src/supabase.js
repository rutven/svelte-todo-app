import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_PUBLIC_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseApiKey);
