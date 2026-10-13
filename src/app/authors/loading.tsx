import SkeletonAuthor from "@/components/loading-author.tsx/author-loading";
import Navbar from "@/components/navbar";
import SkeletonCard from "@/components/skeletonloading";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { Circle, Dot } from "lucide-react";

export default function Loading() {
  const arr = Array(5).fill("1");
  return (
    <div>
      <Navbar/>
      <header className="py-4 mt-2 px-3 flex flex-col gap-1">      
        <h1 className="text-2xl font-semibold capitalize">
          {" "}
          Author and writer discovery{" "}
        </h1>
        <p className="text-md font-semibold text-gray-400">
          Explore a community of writers and discover the people behind the
          stories. Browse author profiles, learn about their interests, and find
          new perspectives, stories, and ideas to read.
        </p>
      </header>
      <Badge variant={"outline"} className="text-md h-5 ">
        {" "}
        <Circle className="fill-green-500 text-green-400 animate-pulse " /> loading user data <Dot className="animate-pulse" /> <Spinner />
      </Badge>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 items-center px-2">
        {arr.map((e) => (
          <SkeletonAuthor key={e} />
        ))}
      </div>
    </div>
  );
}
