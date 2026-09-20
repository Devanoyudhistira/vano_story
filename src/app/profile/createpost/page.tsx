"use client";

import Tiptap from "@/components/editor";
import { useState } from "react";
import "@/app/editor.css";
import Thumbnailimageinput from "@/components/thumbnail-image";
import { Field } from "@/components/ui/field";
import Navbartexteditor from "@/components/navbar-text-editor";
import { Textarea } from "@/components/ui/textarea";
import { JSONContent } from "@tiptap/react";
import Topicoption from "@/components/topic-option";

export default function Page() {
  const [post, setPost] = useState<JSONContent | string>("");
  const [image, setimage] = useState<File | null>(null);
  const [title, settitle] = useState("");
  const [topic, settopic] = useState<Array<string>>([]);
  function addtopic(newtopic: string): void {
    if (!topic.includes(newtopic) && topic.length !== 1) {
      settopic((prev) => [...prev, newtopic]);
    }
  }
  function removetopic() {
    settopic([]);
  }
  const formdata = new FormData();
  if (image) {
    formdata.append("thumbnail", image);
  }
  formdata.append("content", JSON.stringify(post));
  formdata.append("title", title);
  formdata.append("topic",topic[0])

  const onChange = (content: JSONContent | string) => {
    setPost(content);
  };
  const postcontent = async () => {
    await fetch("http://localhost:3003/api/post", {
      method: "POST",
      body: formdata,
    });
  };
  return (
    <main className="w-full  ">
      <Navbartexteditor postbutton={postcontent} />
      <div className="px-2 pt-2 flex flex-col gap-3 ">
        <Thumbnailimageinput
          setimage={setimage}
          className="w-full self-center border-2 border-dashed  h-50 rounded-sm"
        />
      </div>
      <Field className="px-2 self-center w-[90vw]">
        <Textarea
          onChange={(e) => settitle(e.currentTarget.value)}
          placeholder="write the title here"
          className="text-4xl border-none border-0 focus:ring-0 focus:ring-amber-50/0 w-10 inline-block outline-0 ring-0 mb-4 mt-3 text-red-500 font-semibold"
        />
      </Field>
      <Topicoption min="1" topicarray={topic} addtopic={addtopic} removetopic={removetopic} />
      <Tiptap content={post} onChange={onChange} />
    </main>
  );
}
