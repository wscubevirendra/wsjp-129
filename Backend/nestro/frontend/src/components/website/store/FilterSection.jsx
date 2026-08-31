"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function FilterSection({
  title,
  data = [],
  queryKey=""
}) {
  //get url  
  const searchParams = useSearchParams();
  const router = useRouter();

  //get selected values from url and split them into an array
  const selectValues = searchParams.get(queryKey)?.split(",") || [];

  function handleChange(slug) {
    const params = new URLSearchParams(searchParams.toString());
    const currentValues = params.get(queryKey)?.split(",") || [];
    let updatedValues;
    if (currentValues.includes(slug)) {
      updatedValues = currentValues.filter((value) => value !== slug);
    } else {
      updatedValues = [...currentValues, slug];
    }

    params.set(queryKey, updatedValues.join(","));

    if (updatedValues.length === 0) {
      params.delete(queryKey);
    }
    router.push(`/store?${params.toString()}`,{scroll:false});
  }

  return (
    <section className="border-b border-stone-200 pb-7 last:border-none last:pb-0">
      <h3 className="mb-5 text-base font-semibold tracking-wide text-stone-900">
        {title}
      </h3>

      <div className="space-y-3">
        {data.map((item) => {
          const active = selectValues.includes(item.slug);
          return (
            <label
              key={item._id}
              className="group flex cursor-pointer items-center justify-between rounded-lg p-2 transition hover:bg-stone-50"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => handleChange(item.slug)}
                  className="h-4 w-4 rounded border-stone-300 accent-amber-700"
                />

                <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">
                  {item.name}
                </span>
              </div>

              <span className="text-xs text-stone-400">
                {item.count || 0}
              </span>
            </label>
          )
        })}
      </div>
    </section>
  );
}