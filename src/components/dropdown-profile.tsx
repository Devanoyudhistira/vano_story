"use client";

import { Ellipsis, Pen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

type Deleteresponse = {
  message: string;
  success:boolean
};

export default function Dropdownprofile({ id }: { id: string }) {
  const router = useRouter()
  const deleteevent = async (): Promise<Deleteresponse> => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

     const data: Deleteresponse = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message);
    }
    return data    
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={""}>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() =>
          toast.promise(deleteevent(), {
            position: "top-center",
            loading: "Loading...",
            success: (response) => {              
              router.push("/profile");
              return response.message
            },
            error: (err) => err.message,
          })} className={"text-red-500"}>
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
