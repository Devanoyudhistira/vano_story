"use server";

import { createblog } from "@/models/createdata";
import { Userprops } from "@/models/getonedata";
import getuser from "@/models/profile";
import supabaseforimage from "@/supabase/supabaseforimage";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const userdata: Userprops | boolean | null = await getuser();
  const title = formData.get("title");
  const topic = formData.get("topic");  
  const thumbnail = formData.get("thumbnail");
  const contentString = formData.get("content");

  if (!(thumbnail instanceof File)) {
    throw new Error("Thumbnail must be a file");
  }

  const extension = thumbnail.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;

  if (typeof contentString !== "string") {
    return Response.json({ error: "Invalid content" }, { status: 400 });
  }
  if (!userdata) {
    return Response.json({ error: "Invalid user" }, { status: 400 });
  }
  const content = JSON.parse(contentString);
  await supabaseforimage.upload(`blog/${finalname}`, thumbnail);
  await createblog({
    Title: title,
    Content: content,
    Thumbnail: `https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/blog/${finalname}`,
    Date_created: new Date().toISOString(),
    Topic_genre: topic,
    Author: await userdata._id.toString(),
    Like: 0,
    Language: "english",
    View_count: 123,
  });

  return NextResponse.json({
    message: formData,
    success: true,
  });
}
