import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs mt-10 gap-1 ml-10 px-0 pb-4 py-0">
      <CardContent className="p-0" >
        <Skeleton className="aspect-video w-full" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start px-2 pb-3" >
        <Skeleton className="h-8 w-3xl" />
        <Skeleton className="h-4 w-1/2" />
      </CardFooter>
    </Card>
  )
}
