import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://srgbimkptwzzxghkcyvd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyZ2JpbWtwdHd6enhnaGtjeXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MDcxMDcsImV4cCI6MjA2NzM4MzEwN30.n_PpLiNPESHhZjjaMfM52T1F_uw6JoPavLDx399s9PQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
