"use client";

import { usePathname } from "next/navigation";
import Navbutton from "./navbutton";
import {  FaceSlightlySmiling, House, Newspaper, PersonStanding } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footnav() {
  const pathname: string = usePathname();
  const urlname:Array<string> = pathname.split("/");
  console.log(urlname);
  return (
    <footer className="grid grid-cols-4 w-full fixed bottom-0 bg-primary ">
      <Navbutton
        target="/"
        icon={
          <House
            className={cn("size-8", "" === urlname[0] && urlname[1] == "" ? "text-red-500" : "")}
          />
        }
      />
      <Navbutton
        target="/news"
        icon={
          <Newspaper
            className={cn("size-8", "news" === urlname[1] ? "text-red-500" : "")}
          />
        }
      />
      <Navbutton
        target="/authors"
        icon={
          <PersonStanding
            className={cn(
              "size-8",
              "authors" === urlname[1] ? "text-red-500" : "",
            )}
          />
        }
      />
      <Navbutton
        target="/profile"
        icon={
          <FaceSlightlySmiling
            className={cn(
              "size-8",
              "profile" === urlname[1] ? "text-red-500" : "",
            )}
          />
        }
      />
    </footer>
  );
}
