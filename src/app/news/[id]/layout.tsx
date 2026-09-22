import truncate from "@/lib/truncat";
import getonedata from "@/models/getonedata";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }:Props) {
  const { id } = await params;
  const data = await getonedata(id);
  if (data)
    return {
      title: data?.Title,
      description: truncate(
        data?.Content?.content
          ?.map((e) => e?.content?.[0]?.text ?? "")
          .join(" ") ?? "",
        20,
      ),

      openGraph: {
        title: data.Title,
        description: truncate(
        data?.Content?.content
          ?.map((e) => e?.content?.[0]?.text ?? "")
          .join(" ") ?? "",
        20,
      ),
        images: [
          {
            url: data.Thumbnail,
            width: 1200,
            height: 630,
            alt: data.Title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: data.Title,
        description: truncate(
        data?.Content?.content
          ?.map((e) => e?.content?.[0]?.text ?? "")
          .join(" ") ?? "",
        20,
      ),
        images: [data.Thumbnail],
      },
    };
  else {
    return false;
  }
}

export default function Page({ children }: LayoutProps<"/">) {
  return <div>{children}</div>;
}
