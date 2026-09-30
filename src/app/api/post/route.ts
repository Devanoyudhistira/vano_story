"use server";

import {
  createblog,
  deleteblog,  
  updateblog,
} from "@/models/createdata";
import getonedata, { Userprops } from "@/models/getonedata";
import getuser from "@/models/profile";
import supabaseforimage from "@/supabase/supabaseforimage";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const userdata: Userprops | boolean | null = await getuser();
  const title = formData.get("title");
  const topic = formData.get("topic");
  const thumbnail = formData.get("thumbnail");
  const contentString = formData.get("content");
  let message = "your post was success";

  if (!(thumbnail instanceof File)) {
    message = "please add image for thumbnail";
    return NextResponse.json({
      message: message,
      success: false,
    });
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
    message: message,
    success: true,
  });
}
export async function PUT(request: Request) {
  const formData = await request.formData();
  const userdata: Userprops | boolean | null = await getuser();
  const title = formData.get("title");
  const topic = formData.get("topic");
  const id = formData.get("id");
  const thumbnail = formData.get("thumbnail");
  const contentString = formData.get("content");
  if (typeof id !== "string") {
    return Response.json({ error: "Invalid content" }, { status: 400 });
  }
  const dataimage = await getonedata(id);
  if (!userdata) {
    return Response.json({ error: "Invalid user" }, { status: 400 });
  }

  let newimage = dataimage?.Thumbnail;

  if (thumbnail instanceof File && thumbnail.size > 0) {
    const extension = thumbnail.name.split(".").at(-1);
    const finalname =
      Math.random()
        .toString(36)
        .substring(2, 10 + 2) +
      "." +
      extension;
    newimage = `https://ntrtbiyiefmemqbcjsad.supabase.co/storage/v1/object/public/YudhistiraIndrusties/blog/${finalname}`;
    const imageup = await supabaseforimage.upload(`blog/${finalname}`, thumbnail);
    console.log(imageup.error)
    console.log(imageup.data)
  }

  if (typeof contentString !== "string") {
    return Response.json({ error: "Invalid content" }, { status: 400 });
  }

  const content = JSON.parse(contentString);
  await updateblog(
    {
      Title: title,
      Content: content,
      Thumbnail: newimage,
      Date_created: new Date().toISOString(),
      Topic_genre: topic,
      Author: await userdata._id.toString(),
      Like: 0,
      Language: "english",
      View_count: 123,
    },
    id,
  );

  return NextResponse.json({
    message: "update berhasil",
    success: true,
  });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { id } = body;
  console.log(id);
  await deleteblog(id);  
  return NextResponse.json({
    message:"delete success",
    success: true,
  });
}
