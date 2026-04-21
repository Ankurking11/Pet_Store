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
      whileHover={{ y: -8, scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-125"
          />
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            -{product.discount}%
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">{product.category}</p>
          <h3 className="line-clamp-2 text-lg font-black text-gray-900 mb-3 group-hover:text-orange-600 transition">{product.name}</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black text-gray-900">{formatCurrency(discountedPrice)}</span>
            <span className="text-sm text-gray-400 line-through">{formatCurrency(product.price)}</span>
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5 grid grid-cols-2 gap-3">
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
          className="rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 text-sm font-bold text-white transition hover:shadow-lg active:scale-95"
        >
          Add to Cart
        </button>
        <a
          href={getOrderLink(product.name)}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border-2 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-3 text-center text-sm font-bold text-green-700 transition hover:from-green-100 hover:to-emerald-100"
        >
          WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
