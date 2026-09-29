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
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type PostResponse = {
  message: string;
  success:boolean
};

export default function Page() {
  const [post, setPost] = useState<JSONContent | string>("");
  const [image, setimage] = useState<File | null>(null);
  const [title, settitle] = useState("");
  const [topic, settopic] = useState<Array<string>>([]);
  const router = useRouter();
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
  formdata.append("topic", topic[0]);

  const onChange = (content: JSONContent | string) => {
    setPost(content);
  };
  const postcontent = async (): Promise<PostResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post`, {
      method: "POST",
      body: formdata,
    });

    const data: PostResponse = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message);
    }

    return data;
  };
  return (
    <main className="w-full  ">
      <Navbartexteditor
        postbutton={() =>
          toast.promise(postcontent(), {
            position: "top-center",
            loading: "Loading...",
            success: (response) => {
              router.push("/profile");
              return response.message;
            },
            error: (err) => err.message,
          })
        }
      />
      <div className="px-2 pt-2 mt-10 flex flex-col gap-3 ">
        <Thumbnailimageinput
          setimage={setimage}
          className="w-full lg:w-full lg:max-h-full lg:min-h-70 self-center border-2 border-dashed  h-50 rounded-sm"
        />
      </div>
      <Field className="px-2 self-center w-[90vw]">
        <Textarea
          onChange={(e) => settitle(e.currentTarget.value)}
          placeholder="write the title here"
          className="text-4xl lg:text-7xl border-none border-0 focus:ring-0 focus:ring-amber-50/0 w-10 inline-block outline-0 ring-0 mb-4 mt-3 text-red-500 font-semibold"
        />
      </Field>
      <Topicoption
        min="1"
        topicarray={topic}
        addtopic={addtopic}
        removetopic={removetopic}
      />
      <Tiptap content={post} onChange={onChange} />
    </main>
  );
}
