import { Dot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export default function Newscard({ className,gap="gap-10" }: { className?: string,gap?:string }) {
  return (
    <Card className={cn("flex-row py-2 gap-10 items-center",gap)}>
      <CardHeader>
        <div className={cn("w-20 h-20 rounded-md bg-red-400",className)}></div>
      </CardHeader>
      <CardContent className="flex gap-1 py-0  flex-col">
        <div className="flex flex-row text-xs items-center">
          <h1> Formula 1 </h1>
          <Dot />
          <h2 className="text-gray-500"> 3h ago </h2>
        </div>
        <CardTitle className="text-md font-bold" >
            lando norris win a 2025 world driver champion
        </CardTitle>
        <div className="flex flex-row w-full text-xs justify-between" > 
            <h1 className="text-red-500 font-semibold" > Sport </h1>            
        </div>

      </CardContent>
    </Card>
  );
}
