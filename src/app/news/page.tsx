import Navbar from "@/components/navbar";
import Paginationnumber from "@/components/pagination-number";
import { Badge } from "@/components/ui/badge";
import { Circle, Dot } from "lucide-react";
import Newscardpopular from "@/components/news-card-popular";
import { ObjectId } from "mongodb";
import getdata, { getcountdata } from "@/models/getdata";

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
type Props = {
  searchParams: Promise<{
    page: string;
  }>;
};

export default async function News({searchParams}:Props) {
  const {page} = await searchParams
  const datacount = await getcountdata()
  
  const alldata: Blog[] = await getdata(page);
  return (
    <div>
      <Navbar />
      <main className="px-2 mt-4 flex flex-col gap-2">
        <h1 className="text-5xl font-semibold">All news and stories</h1>
        <p>
          make sure to keep up with the newest stories and stay on high
          knowledge happy reading
        </p>
        <Badge variant={"outline"} className="text-md h-5 ">
          {" "}
          <Circle className="fill-green-500 text-green-400 animate-pulse " />{" "}
          all news total <Dot className="animate-pulse" />{" "}
          {datacount}{" "}
        </Badge>
        <div className="flex flex-col gap-2 px-1 border-t-2 pb-2 border-border mt-3">
          <h1 className="text-3xl font-bold capitalize flex items-center gap-1 mb-3 mt-2">
            {" "}
            Latest News{" "}
            <Circle className="fill-red-500 text-red-500 size-3 animate-pulse" />{" "}
          </h1>
          {alldata.map((e) => (
            <Newscardpopular
              id={e._id.toString()}
              image={e?.Thumbnail}
              author={e?.Author}
              genre={e?.Topic_genre}
              title={e?.Title}
              date={e?.Date_created}
              description={
                e?.Content?.content
                  ?.map((e) => e?.content?.[0]?.text ?? "")
                  .join(" ") ?? ""
              }
              key={e._id.toString()}
            />
          ))}
        </div>

        <Paginationnumber page={page} />
      </main>
    </div>
  );
}
