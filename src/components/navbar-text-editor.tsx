import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Submitbutton from "./submit-footer";

export default function Navbartexteditor({postbutton}:{postbutton: () => void;}){
    return <nav className="bg-slate-50 fixed top-0 left-0 z-30 shadow-2xs  w-screen h-13 px-6 py-1 flex items-center justify-between" > 
    <Link href={"/profile"} >
    <ArrowLeft className="size-5" />
     </Link>
     <Submitbutton postcontent={postbutton} />
     </nav>
}