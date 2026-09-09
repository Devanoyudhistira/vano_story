import Authorcard from "@/components/authorcard";
import Editorcard from "@/components/authorcard";
import Mustread from "@/components/mustread";
import Navbar from "@/components/navbar";
import Newscard from "@/components/news-card";
import Newscardpopular from "@/components/news-card-popular";
import { Circle } from "lucide-react";

export default async function Home() {
  

  return (
    <div>
      <Navbar />
      <main className="flex  flex-col px-1 gap-3 py-2 items-center">
        <Newscardpopular />
        <div className="flex flex-col gap-2 px-1 py-1">
          <div className="flex flex-row gap-2 items-center" >
            <h1 className="text-xl font-bold capitalize" >Latest news</h1>
            <Circle className="animate-pulse size-3 fill-red-500 text-red-500" />
          </div>
          <Newscard />
          <Newscard />
          <Newscard />
          <Newscard />
          <Newscard />
        </div>
        <div className="flex flex-col items-center gap-2" >
          <h1 className="text-xl font-bold text-red-500 self-start capitalize" >  Must read </h1>
          <Mustread/> 
          <Newscard className="w-14 h-14" gap="gap-5" />
          <Newscard className="w-14 h-14" gap="gap-5" />          
        </div>
        <div className="flex flex-col w-full px-1 items-center overflow-x-auto scrollbar-hide gap-1" >        
          <h1 className="text-xl font-bold self-start capitalize" >top creator</h1>
          <div className="flex flex-col px-1 gap-1.5 w-full ">
            <Authorcard/>
            <Authorcard/>
            <Authorcard/>
            <Authorcard/>
          </div>
        </div>
      </main>
    </div>
  );
}
