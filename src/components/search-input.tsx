"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchinput() {
  const router = useRouter();
  const [searchinput, setsearchinput] = useState<string>("");
  function handleSearch() {
    const params = new URLSearchParams();
    params.set("search", searchinput);

    router.push(`/news?${params.toString()}`);
  }
  return (
    <form
      onSubmit={(e) => {
        handleSearch();
        e.preventDefault();
      }}
    >
      <InputGroup className="rounded-r-2xl col-span-4 overflow-hidden">
        <InputGroupAddon>
          {" "}
          <Search />{" "}
        </InputGroupAddon>
        <InputGroupInput
          onChange={(e) => setsearchinput(e.currentTarget.value)}
          placeholder="search news here"
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
    </form>
  );
}
