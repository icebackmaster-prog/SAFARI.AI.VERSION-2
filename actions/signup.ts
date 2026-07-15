"use server";

import { supabase } from "@/lib/supabase";

export async function signup(email: string, password: string) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}
