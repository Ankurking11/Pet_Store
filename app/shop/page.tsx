import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ShopClient from "@/components/ShopClient";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop Premium Pet Products in Balewadi Pune",
  description:
    "Browse premium dog food, cat food, toys, and accessories at Pet's Bay & Co with quick WhatsApp ordering.",
  keywords: ["pet products balewadi", "dog food pune", "pet accessories balewadi"],
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-orange-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-3">Shop Products</h1>
          <p className="text-xl text-gray-600">Premium essentials for every pet category.</p>
        </div>

        <ShopClient products={products} />
      </div>
    </div>
  );
}
