"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./menubar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  content: JSONContent;
  onChange: (content: JSONContent) => void;
  fullscreen?: boolean;
}
export default function RichTextEditor({
  content,
  onChange,
  fullscreen = false,
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
        class: cn(
          ` overflow-y-auto w-full outline-none ring-0 rounded-md py-2`,
          fullscreen ? "lg:min-h-screen min-h-screen -mt-5" : "lg:h-130 h-110",
        ),
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML());
      onChange(editor.getJSON());
    },
  });

  return (
    <div>
      {fullscreen && (
        <div className="self-center w-full  flex-col flex items-center justify-center sticky top-1 ">
          <MenuBar fullscreen={fullscreen} editor={editor} />
        </div>
      )}
      <div
        className={cn(
          "w-full gap-0 bg-primary-foreground pb-2 top-2 z-10 border-2 rounded-md blog-content p-2 flex-col flex h-full relative ",
        )}
      >
        {!fullscreen && (
          <div className="self-center w-full  flex-col flex items-center justify-center sticky top-1 ">
            <MenuBar fullscreen={fullscreen} editor={editor} />
          </div>
        )}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
