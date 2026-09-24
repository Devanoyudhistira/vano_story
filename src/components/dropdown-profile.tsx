"use client";

import { Ellipsis, Pen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Dropdownprofile({ id }: { id: string }) {
  const deleteevent = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    redirect("/profile");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={""}>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={deleteevent} className={"text-red-500"}>
          <Trash /> Delete
        </DropdownMenuItem>
        <Link href={"/profile/updatepost/" + id}>
          <DropdownMenuItem>
            <Pen /> Update
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
