import getonedata, { getoneuserdatabyid } from "@/models/getonedata";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import Newsauthorbar from "@/components/news-author-bar";
import TextAlign from "@tiptap/extension-text-align";
import NewsNavbar from "@/components/news-navbar";
import News from "@/components/news";

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
  console.log(data);
  const user = await getoneuserdatabyid(data?.Author.toString());
  console.log(user);

  const html = generateHTML(data.Content, [
    StarterKit,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ]);

  return (
    <div className="w-screen flex overflow-x-hidden flex-col">
      <NewsNavbar />
      <main className="gap-1 flex flex-col mt-1">                        
          <Image
            src={data?.Thumbnail}
            alt=""
            className="w-full h-auto px-10 self-center object-contain!"
            height={1200}
            width={500}
          />        
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
    </div>
  );
}
