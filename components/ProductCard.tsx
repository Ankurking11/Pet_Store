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
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-[#FFF7E8]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        </div>
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">{product.category}</p>
        <h3 className="line-clamp-2 text-base font-semibold text-gray-900">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-semibold text-gray-900">{formatCurrency(discountedPrice)}</span>
          <span className="text-gray-400 line-through">{formatCurrency(product.price)}</span>
        </div>
      </Link>
      <div className="mt-4 grid grid-cols-2 gap-2">
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
          className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          Add to Cart
        </button>
        <a
          href={getOrderLink(product.name)}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-center text-sm font-medium text-amber-700 transition hover:bg-amber-100"
        >
          WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
