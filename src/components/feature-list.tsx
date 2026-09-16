import { Check } from "lucide-react";
import { Badge } from "./ui/badge";


export default function Featurelist(){
    return <div className="flex items-center gap-2" >
        <Badge className="p-1  rounded-full" variant={"destructive"} >
            <Check className="size-10" />
        </Badge>
        <h1 className="font-light text-red-900" > ad-free feel to explore news and gain a new knowledge on our history</h1>
    </div>
}