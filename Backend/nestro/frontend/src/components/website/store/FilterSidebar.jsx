import { fetchCategory, fetchRooms } from "@/api/api";
import FilterSection from "./FilterSection";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";

export default async function FilterSidebar() {
  const category_response = await fetchCategory()
  const room_response = await fetchRooms()


  return (
    <aside className="sticky w-3xs top-20 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between border-b border-stone-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900">Filters</h2>
          <p className="mt-1 text-sm text-stone-500">
            Refine your search
          </p>
        </div>

        <button className="text-sm font-medium text-amber-700 hover:underline">
          Clear All
        </button>
      </div>

      <div className="space-y-8">
        <FilterSection
          title="Room Type"
          data={room_response.data}
          queryKey="room"
        />

        <FilterSection
          title="Category"
          data={category_response.data}
          queryKey="category"

        />

        <PriceFilter />
        <StockFilter />
      </div>
    </aside>
  );
}