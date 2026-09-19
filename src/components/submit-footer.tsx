import { Button } from "./ui/button";

export default function Submitbutton() {
    return <div className=" py-1 flex justify-end gap-2 items-center" >
        <Button className={"text-xl font-semibold"} size={"sm"} variant={"destructive"} > Publish </Button>
        <Button className={"text-xl font-semibold"} size={"sm"} variant={"default"} > Preview </Button>
    </div>
}
