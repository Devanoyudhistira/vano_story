import { Field, FieldLabel, FieldLegend, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type textinput = {
  oriname?: string;
  oribio?: string;
    changename: (text: string) => void;
  changebio: (text: string) => void;
};
export default function Textinput({ oribio, oriname,changename,changebio }: textinput) {
  return (
    <FieldSet className=" w-full">
      <FieldLegend className="text-2xl self-start font-medium text-red-500">
        set your information
      </FieldLegend>
      <Field className="gap-1">
        <FieldLabel className="text-sm capitalize"> Profile Name </FieldLabel>
        <Input
          name="name"
          value={oriname ?? ""}
          onChange={e => changename(e.currentTarget.value)}
          placeholder="type your name here"
        />
      </Field>
      <Field className="gap-1">
        <FieldLabel className="capitalize text-sm"> About yourself </FieldLabel>
        <Textarea onChange={e => changebio(e.currentTarget.value)} value={oribio ?? ""} className="h-25" name="description" />
      </Field>
    </FieldSet>
  );
}
