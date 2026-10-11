import { Spinner } from "@/components/ui/spinner";

export default function Loading(){
    return <div className="flex flex-col justify-center items-center h-screen" >
        <Spinner className="size-50" />
        <h1 className="text-3xl" >load the user data</h1>
    </div>
}