import { create, update } from "@/models/createdata";
import getuser from "@/models/profile";
import { createClient } from "@/supabase/server";
import supabaseforimage from "@/supabase/supabaseforimage";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const supabaseauth = await createClient();
  const { data } = await supabaseauth.auth.getUser();
  const name = formData.get("username");
  const bio = formData.get("bio");
  const topic = formData.get("topic");
  let topicarray = [];
  if (typeof topic === "string") {
    topicarray = JSON.parse(topic);
  }
  const image = formData.get("image");
  if (!(image instanceof File)) {
    throw new Error("File must be a image ");
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
      Description: bio,
      Category: topicarray,
    });
    return NextResponse.json({
      success: true,
      message: "Profile succesfully created",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "failed to create a profile please try again",
    });
  }
}
export async function PUT(request: Request) {
  const user = await getuser();
  if (!user) {
    return { success: false, message: "err" };
  }
  const supabaseauth = await createClient();
  const { data } = await supabaseauth.auth.getUser();
  const formData = await request.formData();
  const name = formData.get("username");
  const bio = formData.get("bio");
  const topic = formData.get("topic");
  let topicarray = [];
  if (typeof topic === "string") {
    topicarray = JSON.parse(topic);
  }
  const image = formData.get("image");
  const isimage = image instanceof File;
  let imageUrl = user.Profile_image;

  if (isimage && image.size > 0) {
    const extension = image.name.split(".").at(-1);

    const finalname =
      Math.random().toString(36).substring(2, 12) + "." + extension;

    await supabaseforimage.upload(`profile/${finalname}`, image);

    imageUrl = `https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/profile/${finalname}`;
  }
  try {
    await update(user._id.toString(), {
      Email: data.user?.email,
      Name: name,
      Profile_image: imageUrl,
      Description: bio,
      Category: topicarray,
    });
    return NextResponse.json({ success: true,message:"update success" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false, message: "update failed" });
  }
}
