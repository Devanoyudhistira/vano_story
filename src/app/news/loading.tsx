import Navbar from "@/components/navbar";
import SkeletonCard from "@/components/skeletonloading";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { Circle, Dot } from "lucide-react";

export default function Loading() {
  const arr = Array(5).fill("1");
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl font-semibold">All news and stories</h1>
      <p>
        make sure to keep up with the newest stories and stay on high knowledge
        happy reading
      </p>
      <Badge variant={"outline"} className="text-md h-5 ">
        {" "}
        <Circle className="fill-green-500 text-green-400 animate-pulse " /> all
        news total <Dot className="animate-pulse" /> <Spinner />
      </Badge>
      <h1 className="text-3xl  lg:col-span-4 font-bold capitalize flex items-center gap-1 mb-3 mt-2">
        {" "}
        Latest News{" "}
        <Circle className="fill-red-500 text-red-500 size-3 animate-pulse" />{" "}
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 gap-3 mt-3 lg:mt-0 lg:grid-cols-4 mt-2">
        {arr.map((e) => (
          <SkeletonCard key={e} />
        ))}
      </div>
    </div>
  );
}
