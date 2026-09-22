import { Dot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import moment from "moment";
import getuser, { getanotheruser, getusername } from "@/models/profile";
import { Userprops } from "@/models/getonedata";
import Link from "next/link";

type post = {
  className?: string;
  gap?: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  id: string;
};

export default async function Newscard({
  className,
  id,
  title,
  category,
  author,
  date,
  image,
}: post) {
  return (
    <Link href={"news/"+id} >
      <Card
        className={cn("flex-row flex w-full py-2 px-1 gap-22 items-center")}
      >
        <CardHeader className="px-1 py-1">
          <div className={cn("w-20 h-20 rounded-md ", className)}>
            <Image
              className={cn("w-full h-full rounded-md ")}
              alt=""
              width={"500"}
              height={"500"}
              src={image}
            />
          </div>
        </CardHeader>
        <CardContent className="flex gap-1 pl-1 py-0  flex-col">
          <div className="flex flex-row text-xs items-center">
            <h1> {await getusername(author)} </h1>
            <Dot />
            <h2 className="text-gray-500"> {moment(date).fromNow()} </h2>
          </div>
          <CardTitle className="text-md font-bold">{title}</CardTitle>
          <div className="flex flex-row w-full text-xs justify-between">
            <h1 className="text-red-500 font-semibold"> {category} </h1>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
