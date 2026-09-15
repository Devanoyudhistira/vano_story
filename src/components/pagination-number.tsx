import Pagenumber from "./pagenumber";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,  
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function Paginationnumber({ page,maximum }: { page: string,maximum:number }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {Number(page) !== 1 && <PaginationPrevious href={`/news?page=${Number(page) - 1}`} />}
        </PaginationItem>
        <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? 1 : Number(page) - 3} />
        <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? 2 : Number(page) - 2} />
        <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? 3 : Number(page) - 1} />
        {maximum !== Number(page) && Number(page) >= 3 && <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? Number(page) + 1 : Number(page)} />}        
        <PaginationItem>
         {maximum !== Number(page) && <PaginationNext href={`/news?page=${Number(page) + 1}`} />}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
