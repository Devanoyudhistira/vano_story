import { BookmarkIcon } from "lucide-react";
import { Toggle } from "./ui/toggle";

export default function Filtertoggle() {
  return (
    <Toggle
      aria-label="Toggle bookmark"
      className="shrink-0 aria-pressed:text-red-500"
      size="sm"
      variant="default"
    >
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground text-black" />
      Bookmark
    </Toggle>
  );
}
