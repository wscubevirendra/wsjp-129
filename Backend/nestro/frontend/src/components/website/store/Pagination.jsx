"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ pages }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
  console.log(pageNumbers)

  function handlePage(page) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page);

    router.push(`/store?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="mt-8 flex justify-center">
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePage(currentPage - 1)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page,index) => (
          <button
            key={page}
            onClick={() => handlePage(page)}
            className={`h-8 w-8 rounded-md border text-sm font-medium ${
              currentPage === page
                ? "border-[#8B5E3C] bg-[#8B5E3C] text-white"
                : "border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E]"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === pages}
          onClick={() => handlePage(currentPage + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}