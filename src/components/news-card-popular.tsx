import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import truncate from "@/lib/truncat";
import getuser, { getanotheruser, getusername } from "@/models/profile";
import { Userprops } from "@/models/getonedata";

type post = {
  classname?: string;
  title: string;
  genre: string;
  author: string;
  image: string;
  description: string;
  date: string;
  id:string
};

export default async function Newscardpopular({
  classname,
  title,
  genre,
  author,
  image,
  description,
  date,
  id
}: post) {
   
  return (
    <Link href={`/news/${id}`} >
      <Card className="pt-0  gap-2">
        <div
          className={cn(
            "w-full h-60 bg-green-400 rounded-md relative ",
            classname,
          )}
        >
          <Image
            src={image}
            height={"500"}
            width={"500"}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <Badge
            variant={"destructive"}
            className="capitalize bg-destructive absolute left-2 bottom-5 text-white py-2 h-6 text-lg"
          >
            {genre}
          </Badge>
        </div>
        <CardHeader className="flex justify-left w-80 px-2 text-xs gap-1 capitalize">
          <span className="text-red-500"> {await getusername(author)} </span>
          <span> • </span>
          <span className="text-gray-500 w-max">
            {" "}
            {moment(date).fromNow()}{" "}
          </span>
        </CardHeader>
        <CardTitle className="text-xl px-2 font-semibold">{title}</CardTitle>
        <CardDescription className="px-3">{truncate(description,60)  }</CardDescription>
      </Card>
    </Link>
  );
}
