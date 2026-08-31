'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const DEFAULT_MIN = 0;
  const DEFAULT_MAX = 10000;

  const [minPrice, setMinPrice] = useState(DEFAULT_MIN);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX);

  // Sync state with URL
  useEffect(() => {
    setMinPrice(Number(searchParams.get('min_price') ?? DEFAULT_MIN));
    setMaxPrice(Number(searchParams.get('max_price') ?? DEFAULT_MAX));
  }, [searchParams]);

  function handleApplyPrice() {
    const params = new URLSearchParams(searchParams.toString());

    params.set('min_price', String(minPrice));
    params.set('max_price', String(maxPrice));

    router.push(`/store?${params.toString()}`, {
      scroll: false,
    });
  }

  function handleClearFilter() {
    const params = new URLSearchParams(searchParams.toString());

    params.delete('min_price');
    params.delete('max_price');

    setMinPrice(DEFAULT_MIN);
    setMaxPrice(DEFAULT_MAX);

    router.push(`/store?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <section className="border-b border-stone-200 pb-7">
      <h3 className="mb-5 text-base font-semibold text-stone-900">
        Price Range
      </h3>

      <div className="flex items-center gap-3">
        <input
          type="number"
          min={0}
          value={minPrice}
          placeholder="Min ₹"
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="h-11 w-full rounded-lg border border-stone-300 px-3 text-sm outline-none transition focus:border-amber-700"
        />

        <span className="text-stone-400">—</span>

        <input
          type="number"
          min={0}
          value={maxPrice}
          placeholder="Max ₹"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="h-11 w-full rounded-lg border border-stone-300 px-3 text-sm outline-none transition focus:border-amber-700"
        />
      </div>

      <button
        onClick={handleApplyPrice}
        disabled={minPrice > maxPrice}
        className="mt-4 w-full rounded-lg bg-amber-700 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-stone-400"
      >
        Apply Price
      </button>

      <button
        onClick={handleClearFilter}
        className="mt-4 w-full rounded-lg border border-amber-700 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
      >
        Clear Filters
      </button>

      {minPrice > maxPrice && (
        <p className="mt-2 text-sm text-red-600">
          Minimum price cannot be greater than maximum price.
        </p>
      )}
    </section>
  );
}