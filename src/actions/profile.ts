"use server";

import { create, update } from "@/models/createdata";
import getuser from "@/models/profile";
import { createClient } from "@/supabase/server";
import supabaseforimage from "@/supabase/supabaseforimage";
import { redirect } from "next/navigation";

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
    console.log(err)
    return { success: false, message: "err" }; 
  }
}
export async function updateprofile(
  category: Array<string>,
  prev: CreateProfileState,
  formdata: FormData,
) {  
  const user = await getuser()
  if(!user){
    redirect("/sign")
  }
  const supabaseauth = await createClient();
  const { data } = await supabaseauth.auth.getUser();
  const name = formdata.get("name");
  const description = formdata.get("description");
  const image = formdata.get("gambar")!;
  const isimage = image instanceof File;

let imageUrl = user.Profile_image;

if (isimage && image.size > 0) {
  const extension = image.name.split(".").at(-1);

  const finalname =
    Math.random().toString(36).substring(2, 12) +
    "." +
    extension;

  await supabaseforimage.upload(`profile/${finalname}`, image);

  imageUrl = `https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/profile/${finalname}`;
}
  try {
    await update(user._id.toString() ,{
      Email: data.user?.email,
      Name: name,
      Profile_image: imageUrl,
      Description: description,
      Category: category,
    });    
    return { success: true };
  } catch (err) {
    console.log(err)
    return { success: false, message: "err" }; 
  }
}
