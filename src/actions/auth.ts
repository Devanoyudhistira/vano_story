"use server";
import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn() {
  const origin = (await headers()).get("origin");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3003/api/auth",
    },
  });

  console.log(data.url);
  if (data.url) {
    redirect(data.url);
  }
}
