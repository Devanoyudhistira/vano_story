import { JSONContent } from "@tiptap/react";
import Tiptap from "@/components/editor";
import { Button } from "./ui/button";
import { Minimize } from "lucide-react";
import MenuBar from "./menubar";

interface RichTextEditorProps {
  post: JSONContent;
  onChange: (content: JSONContent) => void;
  minimize: () => void;
}

export default function FullscreenEditor({post,onChange,minimize}:RichTextEditorProps){
    return <div className="px-3 flex flex-col py-3" >
        <div className="flex gap-2 items-center" >
            <Button size={"icon-sm"} onClick={minimize} variant={"outline"}  >
                <Minimize/>
            </Button>
            <h1> exit from fullscreen </h1>
        </div>        
        <Tiptap fullscreen={true} content={post} onChange={onChange} />
    </div>
}