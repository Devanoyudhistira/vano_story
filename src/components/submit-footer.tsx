import { Button } from "./ui/button";
export type SubmitbuttonProps = {
  postcontent: () => void;
  
};

export default function Submitbutton({postcontent}:SubmitbuttonProps) {
    return <div className=" py-1 flex justify-end gap-2 items-center" >
        <Button onClick={() => postcontent()} className={"text-xl font-semibold"} size={"sm"} variant={"destructive"} > Publish </Button>
        <Button className={"text-xl font-semibold"} size={"sm"} variant={"default"} > Preview </Button>
    </div>
}
