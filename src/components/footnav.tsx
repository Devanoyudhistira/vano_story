"use client";

import { usePathname } from "next/navigation";
import Navbutton from "./navbutton";
import {  CirclePileIcon, House, Newspaper, PersonStanding } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footnav() {
  const pathname = usePathname();  
  return <footer className="grid grid-cols-4 w-full sticky bottom-0 bg-primary " >
    <Navbutton target="/" icon={<House className={cn("size-8","/" === pathname ? "text-red-500" : "")} />} />
    <Navbutton target="/news" icon={<Newspaper className={cn("size-8","/news" === pathname ? "text-red-500" : "")}/> } />
    <Navbutton target="/authors" icon={<PersonStanding className={cn("size-8","/authors" === pathname ? "text-red-500" : "")} />} />
    <Navbutton target="/profile" icon={<CirclePileIcon className={cn("size-8","/profile" === pathname ? "text-red-500" : "")} />} />
  </footer>;
}
