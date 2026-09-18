
import { Card, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Authorcard() {
  return (
    <Card className="px-1 py-1 w-full gap-2 shrink-0 flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-red-500"></div>
        <CardTitle className="px-1 gap-0">
           <h1 className="text-xs font-semibold" > Devano yudhistira</h1>
           <h2 className="text-[10px]" > BBC News </h2>
           </CardTitle>
      </div>
      <CardFooter className="px-1" >
        <Badge className="text-xs h-6 font-semibold" variant={"outline"}>
          {" "}
          150 Post{" "}
        </Badge>
      </CardFooter>
    </Card>
  );
}
