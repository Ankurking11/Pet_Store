"use client";

import { useState } from "react";
import { getOrderLink } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

type ProductDetailActionsProps = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export default function ProductDetailActions({ id, name, image, price }: ProductDetailActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-gray-700">Quantity</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-9 w-9 rounded-lg border border-gray-300"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <span className="w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            className="h-9 w-9 rounded-lg border border-gray-300"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => addItem({ id, name, image, price }, quantity)}
          className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
        >
          Add to Cart
        </button>
        <a
          href={getOrderLink(name)}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm font-semibold text-amber-700"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
