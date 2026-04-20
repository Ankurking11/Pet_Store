import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop Premium Pet Products in Balewadi Pune",
  description:
    "Browse premium dog food, cat food, toys, and accessories at Pet’s Bay & Co with quick WhatsApp ordering.",
  keywords: ["pet products balewadi", "dog food pune", "pet accessories balewadi"],
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
      <h1 className="text-3xl font-semibold text-gray-900">Shop Products</h1>
      <p className="mt-2 text-gray-600">Premium essentials for every pet category.</p>

      <section className="mt-6 grid gap-3 rounded-2xl border border-gray-200 bg-white p-4 md:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block text-gray-500">Category</span>
          <select className="w-full rounded-lg border border-gray-300 px-3 py-2" defaultValue="All">
            <option>All</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Birds</option>
            <option>Fish</option>
            <option>Accessories</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-gray-500">Price</span>
          <select className="w-full rounded-lg border border-gray-300 px-3 py-2" defaultValue="Any">
            <option>Any</option>
            <option>Under ₹500</option>
            <option>₹500 - ₹1500</option>
            <option>₹1500+</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-gray-500">Brand</span>
          <select className="w-full rounded-lg border border-gray-300 px-3 py-2" defaultValue="Any brand">
            <option>Any brand</option>
            <option>Royal Canin</option>
            <option>Pedigree</option>
            <option>Whiskas</option>
          </select>
        </label>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
