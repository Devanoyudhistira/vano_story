import { PaginationItem, PaginationLink } from "./ui/pagination";

export default function Pagenumber({pagenumber,realpage}:{pagenumber:number,realpage:string}) {
  return (
    <PaginationItem>
      <PaginationLink isActive={Number(realpage) == pagenumber} href={`/news?page=${pagenumber}`}>
        {pagenumber}
      </PaginationLink>
    </PaginationItem>
  );
}
