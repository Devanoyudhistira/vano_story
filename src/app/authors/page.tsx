import Authorcomponent from "@/components/author_card";
import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getalluser } from "@/models/getalldata";
import { Circle, Search } from "lucide-react";

export default async function Author() {
  const datauser = await getalluser()
  return (
    <main className="overflow-hidden pb-3">
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
          Explore a community of writers and discover the people behind the stories. Browse author profiles, learn about their interests, and find new perspectives, stories, and ideas to read.

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
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 items-center px-2">
        {datauser.map(e => 
        <Authorcomponent username={e.Name} topic={e.Category} bio={e.Description} id={e._id.toString()} key={e._id.toString()} />
        )}       
      </div>
    </main>
  );
}
