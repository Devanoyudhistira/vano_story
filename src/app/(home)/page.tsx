import Authorcard from "@/components/authorcard";
// import Editorcard from "@/components/authorcard";
import Mustread from "@/components/mustread";
import Navbar from "@/components/navbar";
import Newscard from "@/components/news-card";
import Newscardpopular from "@/components/news-card-popular";
import truncate from "@/lib/truncat";
import getalldata from "@/models/getalldata";
import { createClient } from "@/supabase/server";
import { Circle } from "lucide-react";
import { ObjectId } from "mongodb";

export default async function Home() {
  const supabasauth = await createClient()
  type Blog = {
    _id: ObjectId;
    Author: string;
    Date_created: string;
    Language: string;
    Like: number;
    Thumbnail: string;
    Title: string;
    Topic_genre: string;
    View_count: number;

    Content: {
      type: string;
      content?: {
        type: string;
        content?: {
          type: string;
          text?: string;
        }[];
      }[];
    };
  };

  const alldata: Blog[] = await getalldata("1");

  const {data:userdata} = await supabasauth.auth.getUser()

  console.log(alldata)
  return (
    <div>
      <Navbar />
      <main className="flex  flex-col px-1 gap-3 py-2 items-center">
        <Newscardpopular
          image={alldata[0]?.Thumbnail}
          author={alldata[0]?.Author}
          genre={alldata[0]?.Topic_genre}
          title={alldata[0]?.Title}
          date={alldata[0]?.Date_created}
          description={
            alldata[0]?.Content?.content
              ?.map((e) => e?.content?.[0]?.text ?? "")
              .join(" ") ?? ""
          }
          id={alldata[0]._id.toString()}
        />
        <div className="flex flex-col gap-2 px-1 py-1">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-xl font-bold capitalize">Latest news</h1>
            <Circle className="animate-pulse size-3 fill-red-500 text-red-500" />
          </div>
          <Newscard
            image={alldata[0]?.Thumbnail}
            author={alldata[0]?.Author}
            category={alldata[0]?.Topic_genre}
            title={alldata[0]?.Title}
            date={alldata[0]?.Date_created}
          />
          <Newscard
            image={alldata[1]?.Thumbnail}
            author={alldata[1]?.Author}
            category={alldata[1]?.Topic_genre}
            title={alldata[1]?.Title}
            date={alldata[1]?.Date_created}
          />
          <Newscard
            image={alldata[2]?.Thumbnail}
            author={alldata[2]?.Author}
            category={alldata[2]?.Topic_genre}
            title={alldata[2]?.Title}
            date={alldata[2]?.Date_created}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold text-red-500 self-start capitalize">
            {" "}
            Must read{" "}
          </h1>
          <Mustread
            description={truncate(
              alldata[10]?.Content?.content
                ?.map((e) => e?.content?.[0]?.text ?? "")
                .join(" ") ?? "",
              100,
            )}
            image={alldata[0]?.Thumbnail}
            author={alldata[0]?.Author}
            category={alldata[0]?.Topic_genre}
            title={alldata[0]?.Title}
            date={alldata[0]?.Date_created}
          />
          <Newscard
            image={alldata[2]?.Thumbnail}
            author={alldata[2]?.Author}
            category={alldata[2]?.Topic_genre}
            title={alldata[2]?.Title}
            date={alldata[2]?.Date_created}
          />
          <Newscard
            image={alldata[3]?.Thumbnail}
            author={alldata[3]?.Author}
            category={alldata[3]?.Topic_genre}
            title={alldata[3]?.Title}
            date={alldata[3]?.Date_created}
          />
        </div>
        <div className="flex flex-col w-full px-1 items-center overflow-x-auto scrollbar-hide gap-1">
          <h1 className="text-xl font-bold self-start capitalize">
            top creator
          </h1>
          <div className="flex flex-col px-1 gap-1.5 w-full ">
            <Authorcard />
            <Authorcard />
            <Authorcard />
            <Authorcard />
          </div>
        </div>
      </main>
    </div>
  );
}
