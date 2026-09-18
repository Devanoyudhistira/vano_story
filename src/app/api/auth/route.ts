"use server"

import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { NextResponse } from "next/server";

export async function GET(request: { url: string | URL }) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const supabaseauth = await createClient();

  if (code) {
    await supabaseauth.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`http://localhost:3003/createprofile`);
}
