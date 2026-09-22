import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { getcountdatafromuser } from "@/models/getdata";

type userprops = {
  username:string,
  bio:string,
  topic:string[],
  id:string
}

export default async function Authorcomponent({username,bio,topic,id}:userprops) {
  const userblogcount = await getcountdatafromuser(id)
  return (
    <Card className="px-1 py-1 gap-3">
      <CardHeader className="px-1 flex-row flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-400"></div>
        <div>
          <h1 className="text-xl font-semibold"> {username} </h1>  
        </div>
      </CardHeader>
      <CardDescription className="text-gray-500 px-3 text-md">
        {bio}
      </CardDescription>
      <div className="flex px-2 items-center gap-1">
        {topic.map(e =>
        <Badge key={e} variant={"outline"}>{e}</Badge>
        )}        
      </div>
      <CardFooter className="flex items-center justify-between px-3 ">
        <Link
          href={`authors/${id}`}
          className="text-red-500 text-xs mt-2 font-semibold flex items-center gap-2 capitalize"
        >
          {" "}
          View Profile <ArrowRight className="size-4" />
        </Link>
        <h1 className="text-xs font-medium">
          {" "}
          <span className="font-bold">{userblogcount}</span> Post{" "}
        </h1>
      </CardFooter>
    </Card>
  );
}
