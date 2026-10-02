import getonedata, { getoneuserdatabyid } from "@/models/getonedata";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import "@/app/tiptap.css";
import Newsauthorbar from "@/components/news-author-bar";
import TextAlign from "@tiptap/extension-text-align";
import NewsNavbar from "@/components/news-navbar";
import { JSONContent } from "@tiptap/react";
import { ArrowLeft, Camera } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

type previewprops = {
  content: JSONContent;
  image: string;
  title: string;
  closeevent: () => void;
};

export default function Previewpost({
  content,
  image,
  title,
  closeevent,
}: previewprops) {
  const html = generateHTML(content, [
    StarterKit,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ]);

  const previewDate = new Date().toISOString();

  return (
    <div className="w-screen flex h-full overflow-x-hidden absolute bg-background left-0 z-1000 flex-col">
      <nav className="flex items-center border-border border w-full justify-between shadow-xl py-2 px-2 ">
        <div
          onClick={closeevent}
          className="flex items-center gap-2 cursor-pointer "
        >
          <h1>
            <ArrowLeft />
          </h1>
          <h1 className="text-xl font-semibold text-red-600 capitalize">
            Back to editor
          </h1>
        </div>
        <ModeToggle />
      </nav>
      <main className="gap-1">
        <div
          className={cn(
            "w-full h-full flex items-center justify-center",
            image ? "h-full" : "h-[60vh]",
          )}
        >
          {image ? (
            <Image
              src={image}
              alt=""
              className="w-full h-full object-cover object-center"
              height={500}
              width={500}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 " >
              <h1> no image added </h1>
              <Camera className="size-18 lg:size-30 text-destructive" />
            </div>
          )}
          <h1 className="text-2xl px-2 my-1 font-semibold text-black">
            {" "}
            {title}{" "}
          </h1>
        </div>
        <Newsauthorbar name="Your name here" date={previewDate} />
        <div className="px-4 mt-3" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
}
