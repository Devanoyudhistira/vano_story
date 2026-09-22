import { Card, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { getcountdatafromuser } from "@/models/getdata";
type userprops = {
  username: string;
  topic: string[];
  id: string;
};

export default async function Authorcard({ username, topic, id }: userprops) {
  const post = getcountdatafromuser(id)
  return (
    <Link href={"author/"+id} className="py-2" >
      <Card className="px-1 py-1 w-full gap-2 shrink-0 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-500"></div>
          <CardTitle className="px-1 gap-0">
            <h1 className="text-xs font-semibold"> {username}</h1>
            <div className="flex gap-1 items-center flex-nowrap">
              {topic.map((e) => (
                <h2 key={e} className="text-[10px] text-red-500 font-semibold">
                  {" "}
                  {e}{" "}
                </h2>
              ))}
            </div>
          </CardTitle>
        </div>
        <CardFooter className="px-1">
          <Badge className="text-xs h-6 font-semibold" variant={"outline"}>
            {" "}
            {post} Post{" "}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
