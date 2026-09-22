import Navbar from "@/components/navbar";
import Newscardpopular from "@/components/news-card-popular";
import { Badge } from "@/components/ui/badge";
import { getdatafromuser } from "@/models/getdata";
import { getanotheruser } from "@/models/profile";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const userdata = await getanotheruser(id);
  
  const storyauthor = await getdatafromuser("1", userdata ? userdata._id.toString() : "");
  if (!userdata) {
    return <div>nothing</div>;
  }
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
        {/* <div className="bg-red-500 w-200 h-200" ></div> */}
        <div className="px-2 flex flex-col gap-3 pb-14">
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
