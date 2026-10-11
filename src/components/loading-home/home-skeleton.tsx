import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <Card className="w-full h-90 max-w-xs  gap-1 ml-10 px-0 pb-4 py-0">
      <CardContent className="p-0 w-full h-60" >
        <Skeleton className="aspect-video w-95 h-full" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start px-2 pb-3" >
        <Skeleton className="h-8 w-[60%]" />
        <Skeleton className="h-4 w-1/2" />
      </CardFooter>
    </Card>
  )
}
