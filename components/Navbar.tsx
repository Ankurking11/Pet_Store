"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const links = [
  { href: "/", label: "Home" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
  { href: "/store", label: "Store" },
];

export default function Navbar() {
  const openCart = useCartStore((state) => state.openCart);
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/70 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900">
          Pet’s Bay <span className="text-amber-500">& Co</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={openCart}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow"
        >
          Cart ({cartCount})
        </button>
      </nav>
    </header>
  );
}
