import Navbar from "@/components/navbar";
import getuser from "@/models/profile";
import Image from "next/image";
import { Userprops } from "@/models/getonedata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pen, Plus } from "lucide-react";
import { getdatafromuser } from "@/models/getdata";
import Newscardpopular from "@/components/news-card-popular";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Profile() {
  const userdata: Userprops | boolean | null = await getuser();
  if (!userdata) {
    redirect("/sign");
  }
  const storyauthor = await getdatafromuser("1", userdata._id.toString());
  return (
    <main className="h-screen w-screen flex flex-col gap-1">
      <Navbar />
      <div className="flex flex-col gap-2 items-center">
        <div className="w-28 h-28 overflow-hidden rounded-full">
          <Image
            className="w-full h-full object-center object-cover"
            alt={userdata.Name}
            src={userdata.Profile_image}
            width={500}
            height={500}
          />
        </div>
        <h1 className="text-2xl font-semibold "> {userdata.Name} </h1>
        <div className="flex gap-0.5 items-center">
          {userdata.Category.map((e) => (
            <Badge
              variant={"destructive"}
              className="text-sm font-semibold w-max h-max px-2 py-1 rounded-sm"
              key={e}
            >
              {" "}
              {e}{" "}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-red-500 mb-6 font-bold px-5 w-full flex items-center justify-center ">
          {" "}
          {userdata.Description}{" "}
        </p>
        <div className="flex gap-2 items-center">
          <Link href={"/profile/createpost"}>
            <Button size={"sm"} variant={"destructive"}>
              {" "}
              <Plus /> Create new post{" "}
            </Button>
          </Link>
          <Button size={"sm"} variant={"outline"}>
            {" "}
            <Pen /> Edit profile{" "}
          </Button>
        </div>
        {/* <div className="bg-red-500 w-200 h-200" ></div> */}
        <div className="px-2 grid grid-cols-1 lg:grid-cols-3 gap-3 pb-14">
          {storyauthor?.map((e) => (
            <Newscardpopular
              key={e._id.toString()}
              title={e.Title}
              author={e.Author}
              description={
                e?.Content?.content
                  ?.map((e) => e?.content?.[0]?.text ?? "")
                  .join(" ") ?? ""
              }
              image={e.Thumbnail}
              date={e.Date_created}
              genre={e.Topic_genre}
              id={e._id.toString()}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
