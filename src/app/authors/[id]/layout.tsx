import  { getoneuserdata } from "@/models/getonedata";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }:Props) {
  const { id } = await params;
  const data = await getoneuserdata(id);
  if (data)
    return {
      title: data?.Name,
      description: data.Description,

      openGraph: {
        title: data.Name,
        description: data.Description,
        images: [
          {
            url: data.Profile_image,
            width: 1200,
            height: 630,
            alt: data.Profile_image,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: data.Name,
        description: data.Description,
        images: [data.Profile_image],
      },
    };
  else {
    return false;
  }
}

export default function Page({ children }: LayoutProps<"/">) {
  return <div>{children}</div>;
}
