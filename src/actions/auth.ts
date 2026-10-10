"use server";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn() {  
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/api/auth`,
    },
  });
  console.log(error)

  // console.log(data.url);
  if (data.url) {
    redirect(data.url);
  }
}

export async function signout() {
  const supabase = await createClient();
  const {error} = await supabase.auth.signOut()
  console.log(error)
}
