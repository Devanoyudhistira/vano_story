"use client";

import { useState } from "react";
import "@/app/editor.css";
import { JSONContent } from "@tiptap/react";
import Texteditor from "@/components/text-editor-wrapper";

export default function Page() {
  const [post] = useState<JSONContent>({
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 1,
        },
        content: [
          {
            type: "text",
            text: "Write here",
          },
        ],
      },
    ],
  });
  const [image] = useState<File | null>(null);
  const [title] = useState("");
  const [topic] = useState<Array<string>>([]);
  const formdata = new FormData();
  if (image) {
    formdata.append("thumbnail", image);
  }
  formdata.append("content", JSON.stringify(post));
  formdata.append("title", title);
  formdata.append("topic", topic[0]);

  return (
    <main className="w-full  ">
      <Texteditor
        method="POST"
        oriid={""}
        orithumbnail={""}
        oripost={
          post ?? {
            type: "doc",
            content: [],
          }
        }
        orititle={title}
        oritopic={topic[0]}
      />
    </main>
  );
}
