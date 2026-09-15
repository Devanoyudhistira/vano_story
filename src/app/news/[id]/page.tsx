import getonedata from "@/models/getonedata";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import "@/app/tiptap.css";
import Navbar from "@/components/navbar";
import Newsauthorbar from "@/components/news-author-bar";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  console.log(await params);
  const { id } = await params;
  const data = await getonedata(id);

  if (!data) {
    return <div>Blog not found</div>;
  }

  const html = generateHTML(data.Content, [StarterKit]);

  return (
    <div className="w-screen flex flex-col">
      <Navbar />
      <main className="gap-1" >
        <Image
          src={data?.Thumbnail}
          alt=""
          className="w-full h-full object-cover object-center"
          height={500}
          width={500}
        />
        <h1 className="text-2xl px-2 font-semibold text-black">
          {" "}
          {data.Title}{" "}
        </h1>
        <Newsauthorbar name="devano yudhistira" date={data.Date_created} />
        <div className="px-2" dangerouslySetInnerHTML={{ __html: html }} />;
      </main>
    </div>
  );
}
