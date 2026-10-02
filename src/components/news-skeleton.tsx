import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Newsskeleton() {
  return (
    <div>
      <Card className="w-screen h-full ">
        <CardHeader className="p-0 w-full h-[80vh]">
          <Skeleton className="aspect-video w-full" />
        </CardHeader>
        <CardFooter className="flex flex-col gap-2 items-start px-2 pb-3">
          <Skeleton className="h-8 w-3xl" />
          <Skeleton className="h-4 w-1/2" />
        </CardFooter>
      </Card>
    </div>
  );
}
