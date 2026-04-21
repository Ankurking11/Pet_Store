"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { formatCurrency, getDiscountedPrice, getOrderLink } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-110"
          />
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
            -{product.discount}%
          </span>
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{product.category}</p>
          <h3 className="line-clamp-2 text-base font-bold text-gray-900 mb-3">{product.name}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg font-bold text-gray-900">{formatCurrency(discountedPrice)}</span>
            <span className="text-sm text-gray-400 line-through">{formatCurrency(product.price)}</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() =>
            addItem({
              id: product.id,
              image: product.image,
              name: product.name,
              price: discountedPrice,
            })
          }
          className="rounded-lg bg-gray-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
        >
          Add to Cart
        </button>
        <a
          href={getOrderLink(product.name)}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-orange-300 bg-orange-50 px-3 py-2.5 text-center text-sm font-semibold text-orange-700 transition hover:bg-orange-100"
        >
          WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
