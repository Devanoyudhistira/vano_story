import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { ArrowLeft } from "lucide-react";

export default function NewsNavbar() {
  return (
    <nav className="flex items-center border-border border w-full justify-between shadow-xl py-2 px-2 ">
      <div className="flex items-center gap-2 ">
        <Link href={"/news"}>
          <ArrowLeft />
        </Link>
        <h1 className="text-xl font-semibold text-red-600 capitalize">
          vanoStory
        </h1>
      </div>
      <ModeToggle />
    </nav>
  );
}
