import SkeletonCard from "@/components/skeletonloading";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { Circle, Dot } from "lucide-react";

export default function Loading() {
  const arr = Array(5).fill("1");
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center" >
      <Spinner className="size-40" />
      <h1 className="text-3xl" > please wait while we load the latest news </h1>
    </div>
  );
}
