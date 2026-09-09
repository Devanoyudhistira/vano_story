import Authorcomponent from "@/components/author_card";
import Filtertoggle from "@/components/filter-toggle";
import Sortselect from "@/components/sort-select";
import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Circle, Search } from "lucide-react";

export default function Author() {
  return (
    <main className="overflow-hidden">
      <header className="py-4 mt-2 px-3 flex flex-col gap-1">
        <Badge variant={"outline"}>
          {" "}
          <Circle className="fill-green-500 text-green-500 animate-pulse" /> 195
          Author{" "}
        </Badge>
        <h1 className="text-2xl font-semibold capitalize">
          {" "}
          Author and writer discovery{" "}
        </h1>
        <p className="text-md font-semibold text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          quisquam molestias architecto optio natus omnis. Aliquam distinctio
          inventore eligendi itaque.
        </p>
        <InputGroup className="rounded-r-2xl overflow-hidden" >
          <InputGroupAddon>
            {" "}
            <Search />{" "}
          </InputGroupAddon>
          <InputGroupInput placeholder="search author here" />
          <InputGroupButton variant={"default"} className={"h-full px-3 "}>
            {" "}
            <Search className="size-5" />{" "}
          </InputGroupButton>
        </InputGroup>
        <div className="flex items-center gap-3">
          Sort by : <Sortselect />
        </div>
        <div className="flex flex-row gap-2 overflow-x-scroll mt-3 scrollbar-none flex-nowrap">
          <Filtertoggle />
          <Filtertoggle />
          <Filtertoggle />
          <Filtertoggle />
        </div>
      </header>
      <div className="flex flex-col gap-3 mt-4 items-center px-2">
        <Authorcomponent />
        <Authorcomponent />
        <Authorcomponent />
        <Authorcomponent />
      </div>
    </main>
  );
}
