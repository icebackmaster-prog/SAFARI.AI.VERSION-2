import { supabase } from "@/lib/supabase";

export async function currentUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}
