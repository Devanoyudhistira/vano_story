"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Spinner } from "./ui/spinner";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Searchinput({searchactive}:{searchactive:string | undefined}) {
  const router = useRouter();
  const [searchinput, setsearchinput] = useState<string>("");
  const [ispending, starttransition] = useTransition();
  function handleSearch() {
    const params = new URLSearchParams();
    params.set("search", searchinput);
    starttransition(() => router.push(`/news?${params.toString()}`));
  }
  function removesearch() {   
    setsearchinput("")     
    starttransition(() => router.push(`/news`));
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="col-span-4"
    >
      <InputGroup className="rounded-r-2xl  overflow-hidden">
        <InputGroupAddon>
          {" "}
          <Search />{" "}
        </InputGroupAddon>
        <InputGroupInput
          onChange={(e) => setsearchinput(e.currentTarget.value)}
          placeholder="search news here"
          value={searchinput}
        />
        <InputGroupButton
          type="submit"
          onClick={handleSearch}
          variant={"default"}
          className={"h-full px-3 "}
        >
          {" "}
          <Search className="size-5" />{" "}
        </InputGroupButton>
      </InputGroup>
      {ispending && (
        <div className="absolute top-76 left-0 w-screen h-screen flex flex-col gap-3 items-center justify-center bg-background z-10">
          <Spinner className="lg:size-35 size-24 -mt-90" />
          <h2 className="lg:text-6xl text-4xl font-semibold" > Loading </h2>
        </div>
      )}
      { searchactive && <h1 onClick={removesearch} className="text-xl font-medium text-destructive mt-2 flex items-center gap-1" ><X/>  clear search  </h1>}
    </form>
  );
}
