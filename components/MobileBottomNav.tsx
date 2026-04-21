"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function MobileBottomNav() {
  const openCart = useCartStore((state) => state.openCart);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-5">
        <Link href="/" className="py-3 text-center text-xs font-medium text-gray-700">
          Home
        </Link>
        <Link href="/#gallery" className="py-3 text-center text-xs font-medium text-gray-700">
          Gallery
        </Link>
        <Link href="/shop" className="py-3 text-center text-xs font-medium text-gray-700">
          Shop
        </Link>
        <button onClick={openCart} type="button" className="py-3 text-xs font-medium text-gray-700">
          Cart
        </button>
        <Link href="/store" className="py-3 text-center text-xs font-medium text-gray-700">
          Store
        </Link>
      </div>
    </div>
  );
}
