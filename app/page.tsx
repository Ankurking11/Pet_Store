import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { categories, offers, products, reviews } from "@/lib/data";
import { WHATSAPP_BASE } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
      <FadeInSection>
        <div className="rounded-3xl bg-gradient-to-br from-[#FFF7E8] to-white p-8 shadow-sm md:p-14">
        <p className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-wide text-amber-700">
          Balewadi, Pune
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
          Everything Your Pet Loves, Under One Roof
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          Premium food, toys & care — trusted by pet parents in Balewadi.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
          >
            Shop Now
          </Link>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            Order on WhatsApp
          </a>
        </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid gap-4 rounded-2xl border border-gray-200/80 bg-white p-4 text-sm text-gray-700 shadow-sm sm:grid-cols-3">
        <p>⭐ 5.0 Rating (124 Reviews)</p>
        <p>🚚 Fast Delivery</p>
        <p>💰 Best Prices</p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Shop by Category</h2>
          <Link href="/shop" className="text-sm font-medium text-amber-600">
            Explore all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} image={category.image} />
          ))}
        </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Featured Products</h2>
          <Link href="/shop" className="text-sm font-medium text-amber-600">
            View all products
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="rounded-3xl bg-gray-900 px-6 py-10 text-white md:px-10">
        <h2 className="text-2xl font-semibold">Exclusive Offers This Week</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-200">
          {offers.map((offer) => (
            <li key={offer}>• {offer}</li>
          ))}
        </ul>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">What Pet Parents Say</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} name={review.name} text={review.text} rating={review.rating} />
          ))}
        </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="rounded-3xl border border-amber-100 bg-amber-50 p-8 text-center shadow-sm md:p-12">
        <h2 className="text-2xl font-semibold text-gray-900">Visit Our Store in Balewadi</h2>
        <p className="mt-2 text-gray-700">See our premium collection in person and get expert guidance.</p>
        <Link
          href="/store"
          className="mt-6 inline-flex rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Get Directions
        </Link>
        </div>
      </FadeInSection>
    </div>
  );
}
