import getonedata, { getoneuserdatabyid } from "@/models/getonedata";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import Newsauthorbar from "@/components/news-author-bar";
import TextAlign from "@tiptap/extension-text-align";
import NewsNavbar from "@/components/news-navbar";
import News from "@/components/news";
import Newscard from "@/components/news-card";
import { getlimiteddata } from "@/models/getdata";
import { Separator } from "@base-ui/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const data = await getonedata(id);
  if (!data) {
    return <div>Blog not found</div>;
  }
  const user = await getoneuserdatabyid(data?.Author.toString());
  const otherpost = await getlimiteddata(3);

  const html = generateHTML(data.Content, [
    StarterKit,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ]);

  return (
    <div className="w-screen flex overflow-x-hidden pb-10 flex-col">
      <NewsNavbar />
      <div className=" w-full lg:gap-2 px-0 self-center mt-1 *:rounded-lg flex flex-col lg:flex-row ">
        <main className="gap-1 w-full lg:w-[180%] flex flex-col bg-background shadow-2xl pt-3 mt-3 ">
          <div className="overflow-hidden rounded-xl " >
            <Image
              src={data?.Thumbnail}
              alt=""
              className="w-full h-auto px-4 rounded-xl self-center object-contain!"
              height={1200}
              width={500}
            />
          </div>
          <h1 className="text-lg! lg:text-4xl! px-2 my-1 font-semibold ">
            {" "}
            {data.Title}{" "}
          </h1>
          <Newsauthorbar
            profileimage={user ? user?.Profile_image : ""}
            name={user ? user?.Name : ""}
            date={data.Date_created}
          />
          <News html={html} />
        </main>
        <footer className="flex flex-col lg:mt-4 h-fit gap-2 py-4 w-full px-2 bg-background shadow-2xl ">
          <div className="border-y-2 py-3 w-full flex text-sm items-center justify-between px-4">
            <h1 className=" font-bold text-lg ">other news</h1>
            <Link className="text-red-500 flex items-center gap-0.5 font-medium" href={"/news"}>
              {" "}
              See other{" "}
              <ChevronRight/>
            </Link>
          </div>
          {otherpost.map((e) => (
            <Newscard
              id={e._id.toString()}
              date={e.Date_created}
              author={e.Author}
              image={e.Thumbnail}
              category={e.Topic_genre}
              title={e.Title}
              key={e._id.toString()}
            />
          ))}
        </footer>
      </div>
    </div>
  );
}
