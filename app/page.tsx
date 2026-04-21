import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { categories, offers, products, reviews } from "@/lib/data";
import { WHATSAPP_BASE } from "@/lib/utils";

const galleryMoments = [
  {
    src: "/gallery/pet-play-1.svg",
    title: "Park fetch time",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery/pet-play-2.svg",
    title: "Snack pick at the store",
    className: "row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    src: "/gallery/pet-play-3.svg",
    title: "Toy corner fun",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/pet-play-4.svg",
    title: "Evening walk break",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/pet-play-5.svg",
    title: "Treat time smiles",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/pet-play-6.svg",
    title: "Happy checkout moment",
    className: "col-span-2 md:col-span-2 md:row-span-1",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
      <FadeInSection>
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-br from-[#FFF8EC] via-[#FFF4DE] to-[#FFEFD7] p-6 shadow-sm md:p-10">
          <div className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-amber-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-orange-200/40 blur-2xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-amber-700">
                Balewadi, Pune
              </p>
              <h1 className="max-w-xl text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
                Give Your Pet the Love, Care & Food They Deserve
              </h1>
              <p className="mt-4 max-w-xl text-base text-gray-700 md:text-lg">
                A modern premium pet store experience with trusted nutrition, toys, and expert guidance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
                >
                  Explore Collection
                </Link>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-amber-300 bg-white px-6 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
                >
                  Order on WhatsApp
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
                <p className="rounded-xl border border-amber-200 bg-white/80 px-3 py-2">
                  <span aria-hidden="true">⭐</span> <span className="sr-only">5 star rating: </span>5.0 Rating
                </p>
                <p className="rounded-xl border border-amber-200 bg-white/80 px-3 py-2">
                  <span aria-hidden="true">🚚</span> <span className="sr-only">Service feature: </span>Fast Delivery
                </p>
                <p className="rounded-xl border border-amber-200 bg-white/80 px-3 py-2">
                  <span aria-hidden="true">💰</span> <span className="sr-only">Value feature: </span>Best Prices
                </p>
              </div>
            </div>
            <figure className="relative h-[320px] overflow-hidden rounded-3xl border border-amber-100 bg-white/70 shadow-sm sm:h-[420px]">
              <Image
                src="/gallery/hero-pet-care.svg"
                alt="Pet care hero illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>
          </div>
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
        <section className="rounded-[2rem] border border-amber-100 bg-[#FFF8EC] p-5 shadow-sm md:p-7">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Pet Moments Gallery</h2>
              <p className="mt-1 text-sm text-gray-600">
                Playtime, snack picks, and happy shopping moments from our store.
              </p>
            </div>
            <Link href="/store" className="text-sm font-medium text-amber-700">
              Visit store
            </Link>
          </div>
          <div className="grid auto-rows-[120px] grid-cols-2 gap-3 md:auto-rows-[120px] md:grid-cols-4 md:gap-4">
            {galleryMoments.map((moment) => (
              <article
                key={moment.src}
                className={`group relative overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm ${moment.className}`}
              >
                <Image
                  src={moment.src}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-xs font-medium text-white">{moment.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
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
