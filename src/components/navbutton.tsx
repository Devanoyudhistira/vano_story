import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";


export default function Navbutton({target,icon}:{target:string,icon:React.ReactNode}) {
  return  <Link href={target} >
    <Button size={"icon-lg"} className={"w-full rounded-none m-0"} variant={"outline"}>{icon} </Button>
  </Link>;
}
