import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Sortselect() {
  const items = [
    { label: "Most published", value: "published" },
    { label: "Newest post", value: "newest" },
  ];
  return (
    <Select items={items}>
      <SelectTrigger className="w-50 font-bold">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem              
              key={item.value}
              value={item.value}
            >
              <h1 > {item.label} </h1>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
