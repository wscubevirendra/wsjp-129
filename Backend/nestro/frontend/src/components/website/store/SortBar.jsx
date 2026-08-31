'use client';

export default function SortBar() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border mb-4 border-[#E8E0D5] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-shrink-0 items-center gap-2">
        <span className="hidden text-[11px] text-[#6B7280] sm:block">
          Sort:
        </span>

        <select
          className="cursor-pointer rounded-md border border-[#E8E0D5] bg-white px-3 py-1.5 text-[12px] text-[#1E1E1E] outline-none transition-colors focus:border-[#C6A27E]"
          defaultValue="newest"
        >
          <option value="featured">Featured</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}