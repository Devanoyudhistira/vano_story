import Texteditor from "@/components/text-editor-wrapper";
import getonedata from "@/models/getonedata";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const data = await getonedata(id)
  console.log(data)
  return <div>
    <Texteditor orithumbnail={data?.Thumbnail} oripost={data?.Content} orititle={data?.Title} oritopic={data?.Topic_genre} />
  </div>;
}
