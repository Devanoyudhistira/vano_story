import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { ArrowRight } from "lucide-react";

export default function Authorcomponent() {
  return (
    <Card className="px-1 py-1 gap-3">
      <CardHeader className="px-1 flex-row flex">
        <div className="w-12 h-12 rounded-full bg-blue-400"></div>
        <div>
          <h1 className="text-xl font-semibold"> Devano yudhistira </h1>
          <h2 className="text-red-500 font-medium text-md"> Indonesia </h2>
        </div>
      </CardHeader>
      <CardDescription className="text-gray-500 px-3 text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        aliquam.
      </CardDescription>
      <div className="flex px-2 items-center gap-1">
        <Badge variant={"outline"}>sport</Badge>
        <Badge variant={"outline"}>politics</Badge>
      </div>
      <CardFooter className="flex items-center justify-between px-3 ">
        <Link
          href={"/#"}
          className="text-red-500 text-xs mt-2 font-semibold flex items-center gap-2 capitalize"
        >
          {" "}
          View Profile <ArrowRight className="size-4" />
        </Link>
        <h1 className="text-xs font-medium">
          {" "}
          <span className="font-bold">95</span> Post{" "}
        </h1>
      </CardFooter>
    </Card>
  );
}
