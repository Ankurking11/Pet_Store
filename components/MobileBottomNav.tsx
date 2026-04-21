"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function MobileBottomNav() {
  const openCart = useCartStore((state) => state.openCart);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-1 p-2">
        <Link href="/" className="rounded-lg py-3 text-center text-xs font-bold text-gray-700 hover:bg-gray-100 transition">
          🏠 Home
        </Link>
        <Link href="/#gallery" className="rounded-lg py-3 text-center text-xs font-bold text-gray-700 hover:bg-gray-100 transition">
          🖼️ Gallery
        </Link>
        <Link href="/shop" className="rounded-lg py-3 text-center text-xs font-bold text-gray-700 hover:bg-gray-100 transition">
          🛍️ Shop
        </Link>
        <button onClick={openCart} type="button" className="rounded-lg py-3 text-xs font-bold text-gray-700 hover:bg-gray-100 transition">
          🛒 Cart
        </button>
      </div>
    </div>
  );
}
