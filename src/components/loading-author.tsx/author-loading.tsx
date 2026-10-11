import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonAuthor() {
  return (
    <Card className="w-full gap-1 h-40">
      <CardContent className="p-1 w-full h-max flex flex-row gap-1 items-center" >
        <Skeleton className="w-10 h-10 rounded-full" />
        <Skeleton className="aspect-video w-30 h-10" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start px-2 pb-3" >
        <Skeleton className="h-8 w-[60%]" />
        <Skeleton className="h-4 w-1/2" />
      </CardFooter>
    </Card>
  )
}
