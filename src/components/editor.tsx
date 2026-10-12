"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./menubar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Button } from "./ui/button";
import { Expand, ExpandIcon } from "lucide-react";

interface RichTextEditorProps {
  content: JSONContent;
  onChange: (content: JSONContent) => void;
}
export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
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
      attributes: {
        class: "h-90 overflow-scroll w-full outline-none ring-0 rounded-md  py-2",
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML());
      onChange(editor.getJSON());
    },
  });
  console.log(content);

  return (
    <div className="w-full relative  gap-0 h-full pb-2  border-2 rounded-md blog-content p-2 flex-col flex ">      
      <div className="self-center sticky top-1 ">
        <MenuBar editor={editor} />
      </div>
      <EditorContent  editor={editor} />      
      <Button
        variant={"ghost"}
        size={"icon-lg"}
        className={"absolute  top-3 z-12000 right-2 "}
      >
        {" "}
        <Expand className="size-6" />{" "}
      </Button>
    </div>
  );
}
