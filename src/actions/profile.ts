"use server";

import { create } from "@/models/createdata";
import { revalidatePath } from "next/cache";
import { createClient } from "@/supabase/server";
import supabaseforimage from "@/supabase/supabaseforimage";

export type CreateProfileState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
} | null;

export async function Createprofile(
  category: Array<string>,
  prev: CreateProfileState,
  formdata: FormData,
) {
  // console.log(category);
  const supabaseauth = await createClient();
  const { data } = await supabaseauth.auth.getUser();
  const name = formdata.get("name");
  const description = formdata.get("description");
  const image = formdata.get("gambar")!;
  if (!(image instanceof File)) {
    throw new Error("Gambar harus berupa file");
  }
  const extension = image.name.split(".").at(-1);

  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;
    await supabaseforimage.upload(`profile/${finalname}`, image);
  try {
    await create({
      Email: data.user?.email,
      Name: name,
      Profile_image: `https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/profile/${finalname}`,
      Description: description,
      Category: category,
    });    
    return { success: true };
  } catch (err) {
    return { success: false, message: "err" }; 
  }
}
