"use client"
import moment from "moment";
import Image from "next/image";
import { Button } from "./ui/button";
import {  Share2 } from "lucide-react";

type props = {
  name: string;
  date: string;
  profileimage?: string;
  title:string;
  description:string;
};

export default function Newsauthorbar({ name, date, profileimage,title,description }: props) {
  async function shareContent() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Sharing is not supported on this browser.");
    }
  }

  return (
    <div className="flex items-center justify-between w-full rounded-xl ml-1 py-0.5  gap-2 px-2">
      <div className="flex items-center gap-1">
        <div className="w-9 h-9 rounded-full overflow-hidden border-red-400 border">
          {profileimage ? (
            <Image src={profileimage} width={500} height={500} alt={name} />
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm! lg:text-3xl! capitalize font-semibold text-red-500 ">
            {" "}
            {name}{" "}
          </h1>
          <h5 className="text-xs! lg:text-md!  font-medium">
            {" "}
            {moment(date).format("ddd MMM DD YYYY")}{" "}
          </h5>
        </div>
      </div>
      <Button onClick={shareContent} className={"mr-4 lg:mr-0"} variant={"outline"} size={"icon-lg"}>
        {" "}
        <Share2 className="size-6" />{" "}
      </Button>
    </div>
  );
}
