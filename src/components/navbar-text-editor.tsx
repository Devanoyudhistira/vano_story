import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Submitbutton from "./submit-footer";

export default function Navbartexteditor(){
    return <nav className="bg-slate-50 shadow-2xs  w-screen h-13 px-6 py-1 flex items-center justify-between" > 
    <Link href={"/profile"} >
    <ArrowLeft className="size-5" />
     </Link>
     <Submitbutton/>
     </nav>
}