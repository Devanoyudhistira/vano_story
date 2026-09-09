import { Dot } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export default function Mustread({classname}:{classname?:string}) {
  return (
    <Card className={cn("px-0 py-0 h-70",classname)}>
      <div className="w-full h-full bg-red-200 flex flex-col justify-end px-2 py-1">
        <CardHeader className="flex gap-2 px-0 items-center">
          <h1 className="text-md font-bold"> CNN </h1>
          <Dot />
          <h1> 2 hour ago </h1>
        </CardHeader>
        <CardTitle className="text-lg font-bold text-white" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
          vitae?
        </CardTitle>
        <CardDescription className="text-gray-500 text-xs" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et velit fugit illo iste impedit! Tempora laboriosam iure voluptatibus.
        </CardDescription>
      </div>
    </Card>
  );
}
