import { Field, FieldLabel, FieldLegend, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type textinput = {
  oriname?: string;
  oribio?: string;
  changename: (text: string) => void;
  changebio: (text: string) => void;
  max: number;
  maxname: number;
};
export default function Textinput({
  oribio,
  oriname,
  changename,
  changebio,
  max,
  maxname,
}: textinput) {
  const biovalidation = oribio ? oribio.length >= max : false;
  const namevalidation = oriname ? oriname.length >= maxname : false;
  return (
    <FieldSet className=" w-full">
      <FieldLegend className="text-2xl self-start font-medium text-red-500">
        set your information
      </FieldLegend>
      <Field className="gap-1 relative">
        <div className="absolute -bottom-6 left-4">
          <span className="text-xs font-medium">
            {" "}
            {oriname?.length}/{maxname}{" "}
          </span>
        </div>
        <FieldLabel className="text-sm capitalize"> Profile Name </FieldLabel>
        <Input
          name="name"
          required
          maxLength={maxname}
          aria-invalid={namevalidation}
          value={oriname ?? ""}
          onChange={(e) => changename(e.currentTarget.value)}
          placeholder="type your name here"
        />
      </Field>
      <Field className="gap-1 relative ">
        <FieldLabel className="capitalize text-sm"> About yourself </FieldLabel>
        <Textarea
          required
          onChange={(e) => changebio(e.currentTarget.value)}
          maxLength={max}
          value={oribio ?? ""}
          aria-invalid={biovalidation}
          className={
            "min-h-35 max-w-full resize-none overflow-x-hidden  overflow-y-auto wrap-break-word break-all "
          }
          name="description"
        />
        <div className="absolute bottom-1 left-2">
          <span className="text-xs font-medium">
            {" "}
            {oribio?.length}/{max}{" "}
          </span>
        </div>
      </Field>
    </FieldSet>
  );
}
