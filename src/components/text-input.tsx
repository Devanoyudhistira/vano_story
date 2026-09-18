import { Field, FieldLabel, FieldLegend, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Textinput(){
    return <FieldSet className=" w-full" >
        <FieldLegend className="text-2xl self-start font-medium text-red-500" >
            set your information
        </FieldLegend>        
            <Field className="gap-1" >
                <FieldLabel className="text-sm capitalize" > Profile Name </FieldLabel>
                <Input name="name" placeholder="type your name here" />
            </Field>         
            <Field className="gap-1" >
                <FieldLabel className="capitalize text-sm" > About yourself </FieldLabel>
                <Textarea className="h-25" name="description" />
            </Field>         
    </FieldSet>
}