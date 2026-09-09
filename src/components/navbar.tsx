import { Menu } from "lucide-react";

export default function Navbar(){
    return <nav className="flex items-center border-border border w-full justify-between shadow-xl py-2 px-2 " >
        <h1 className="text-lg font-semibold text-red-600 capitalize" >vanoStory</h1>
        <Menu className="size-10" />
    </nav>
}