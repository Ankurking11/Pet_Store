"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/data";

type ShopClientProps = {
  products: Product[];
};

export default function ShopClient({ products }: ShopClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("Any");
  const [selectedBrand, setSelectedBrand] = useState("Any brand");

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    
    const priceMatch =
      selectedPrice === "Any" ||
      (selectedPrice === "Under ₹500" && product.price < 500) ||
      (selectedPrice === "₹500 - ₹1500" && product.price >= 500 && product.price <= 1500) ||
      (selectedPrice === "₹1500+" && product.price > 1500);
    
    const brandMatch = selectedBrand === "Any brand" || product.brand === selectedBrand;
    
    return categoryMatch && priceMatch && brandMatch;
  });

  return (
    <>
      <section className="mb-8 grid gap-4 rounded-2xl border border-orange-200 bg-white/80 backdrop-blur p-6 md:grid-cols-3">
        <label htmlFor="category-filter" className="text-sm">
          <span className="mb-2 block font-bold text-gray-700">Category</span>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-lg border border-orange-300 px-4 py-2.5 bg-white font-medium text-gray-900 transition hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>All</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Birds</option>
            <option>Fish</option>
            <option>Accessories</option>
          </select>
        </label>
        <label htmlFor="price-filter" className="text-sm">
          <span className="mb-2 block font-bold text-gray-700">Price Range</span>
          <select
            id="price-filter"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="w-full rounded-lg border border-orange-300 px-4 py-2.5 bg-white font-medium text-gray-900 transition hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Any</option>
            <option>Under ₹500</option>
            <option>₹500 - ₹1500</option>
            <option>₹1500+</option>
          </select>
        </label>
        <label htmlFor="brand-filter" className="text-sm">
          <span className="mb-2 block font-bold text-gray-700">Brand</span>
          <select
            id="brand-filter"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full rounded-lg border border-orange-300 px-4 py-2.5 bg-white font-medium text-gray-900 transition hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Any brand</option>
            <option>Royal Canin</option>
            <option>Pedigree</option>
            <option>Whiskas</option>
            <option>Nutripet</option>
            <option>Aqua Gold</option>
            <option>PawPlay</option>
            <option>CozyPaws</option>
            <option>FelineHome</option>
          </select>
        </label>
      </section>

      <section>
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 py-16 text-center">
            <p className="text-xl font-bold text-gray-700">No products found</p>
            <p className="mt-2 text-gray-600">Try adjusting your filters</p>
          </div>
        )}
        <p className="mt-8 text-center text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </section>
    </>
  );
}
