import { Dot } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import moment from "moment";
import Image from "next/image";
import { getusername } from "@/models/profile";

type post = {
  className?: string;  
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  description:string
};

export default function Mustread({className,title,author,date,image,description}:post) {
  return (
    <Card className={cn("px-0 py-0 h-70",className)}>
      <div className="w-full h-full relative flex flex-col justify-end px-2 py-1">
        <Image src={image} height={"500"} width={500} alt={title} className="w-full h-full object-cover object-center absolute top-0 left-0 " />
        <CardHeader className="flex gap-2 px-0 z-2 items-center">
          <h1 className="text-md font-bold text-red-500"> { getusername(author)} </h1>
          <Dot />
          <h1> {moment(date).fromNow() } </h1>
        </CardHeader>
        <CardTitle className="text-lg font-bold  z-2 text-primary" >
          {title}
        </CardTitle>
        <CardDescription className="text-gray-500 z-1 text-xs" >
            {description}
        </CardDescription>
      </div>
    </Card>
  );
}
