import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_SUPABASE_PUBLISHABLE_KEY!;
const supabaseServiceRole = process.env.NEXT_SERVICE_ROLE_KEY!;
const supabase = createClient(
  supabaseUrl,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default supabase.schema("repair-no") ;
