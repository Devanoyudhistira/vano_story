import { Button } from "./ui/button";
export type SubmitbuttonProps = {
  postcontent: () => void;
  openpreview:() => void;
};

export default function Submitbutton({postcontent,openpreview}:SubmitbuttonProps) {
    return <div className=" py-1 flex justify-end gap-2 items-center" >
        <Button onClick={() => postcontent()} className={"text-xl font-semibold"} size={"sm"} variant={"destructive"} > Publish </Button>
        <Button onClick={openpreview} className={"text-xl font-semibold"} size={"sm"} variant={"default"} > Preview </Button>
    </div>
}
