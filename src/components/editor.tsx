"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./menubar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Button } from "./ui/button";
import { Expand, ExpandIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface RichTextEditorProps {
  content: JSONContent;
  onChange: (content: JSONContent) => void;
}
export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const [fullscreen,setfullscreen] = useState(false)
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: content,
    editorProps: {
      attributes: {class:"lg:h-130 h-110 overflow-y-auto w-full outline-none ring-0 rounded-md py-2" },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML());
      onChange(editor.getJSON());
    },
  });  

  return (
    <div className={cn( "w-full gap-0 bg-primary-foreground pb-2 top-2 z-1000 border-2 rounded-md blog-content p-2 flex-col flex h-full relative ")}>      
      <div className="self-center w-full  flex-col flex items-center justify-center sticky top-1 ">
        <MenuBar editor={editor} />
      </div>
      <EditorContent editor={editor} />      
  
    </div>
  );
}
