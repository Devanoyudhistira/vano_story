import Pagenumber from "./pagenumber";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function Paginationnumber({ page }: { page: string }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {Number(page) !== 1 && <PaginationPrevious href={`/news?page=${Number(page) - 1}`} />}
        </PaginationItem>
        <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? 1 : Number(page) - 3} />
        <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? 2 : Number(page) - 2} />
        <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? 3 : Number(page) - 1} />
        {Number(page) >= 3 && <Pagenumber realpage={page} pagenumber={Number(page) <= 3 ? Number(page) + 1 : Number(page)} />}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`/news?page=${Number(page) + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
