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
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-orange-100/30 shadow-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-gray-900 flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          Pet&apos;s Bay <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">& Co</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-gray-700 transition hover:text-orange-600 hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={openCart}
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 text-sm font-bold text-white transition hover:shadow-lg hover:scale-105 transform"
        >
          🛒 ({cartCount})
        </button>
      </nav>
    </header>
  );
}
