"use client";

import Tiptap from "@/components/editor";
import { useState } from "react";
import "@/app/editor.css";
import Profilecreation from "@/components/profile-creation";
import Thumbnailimageinput from "@/components/thumbnail-image";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbartexteditor from "@/components/navbar-text-editor";

export default function Page() {
  const [post, setPost] = useState("");

  const onChange = (content: string) => {
    setPost(content);
    console.log(content);
  };
  return (
    <main className="w-full  ">
      <Navbartexteditor />
      <div className="px-2 pt-2 flex flex-col gap-3 "></div>
      <Thumbnailimageinput className="w-full self-center border-2 border-dashed  h-50 rounded-sm" />
      <Field>
        <Input
          placeholder="write the title here"
          className="text-2xl border-none outline-0 ring-0 text-red-500 font-semibold"
        />
      </Field>
      <Tiptap content={post} onChange={onChange} />
    </main>
  );
}
