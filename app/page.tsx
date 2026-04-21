import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import ScrollPetSides from "@/components/ScrollPetSides";
import { categories, offers, products, reviews } from "@/lib/data";
import { WHATSAPP_BASE } from "@/lib/utils";

const galleryMoments = [
  {
    src: "/gallery/pets-playing.jpg",
    title: "Playtime at the store",
  },
  {
    src: "/gallery/lifestyle-1.jpg",
    title: "Shopping with family",
  },
  {
    src: "/gallery/product-shelf.jpg",
    title: "Premium products",
  },
  {
    src: "/gallery/happy-pet.jpg",
    title: "Joy and happiness",
  },
  {
    src: "/gallery/pet-play-1.svg",
    title: "Park adventures",
  },
  {
    src: "/gallery/pet-play-2.svg",
    title: "Store moments",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-28 px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
      <ScrollPetSides />
      <FadeInSection>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="p-6 md:p-10 lg:p-12">
              <p className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold tracking-widest text-orange-700 uppercase">
                Welcome to pet's bay
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-4">
                Happy pets.
                <br />
                <span className="text-orange-500">Better days.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                Premium food, toys, and pet care essentials in Balewadi, Pune. Everything your furry friends need in one cozy place.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap mb-8">
                <Link
                  href="/shop"
                  className="rounded-lg bg-gray-900 px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-gray-800 active:scale-95"
                >
                  Shop Now
                </Link>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border-2 border-orange-500 bg-white px-8 py-4 text-center text-sm font-bold text-orange-600 transition hover:bg-orange-50"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
            <figure className="relative h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl">
              <Image
                src="/hero-dog.jpg"
                alt="Happy dog in pet store"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </figure>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Shop by Category</h2>
            <Link href="/shop" className="text-sm font-bold text-orange-600 hover:text-orange-700">
              View all →
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
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Featured Products</h2>
            <Link href="/shop" className="text-sm font-bold text-orange-600 hover:text-orange-700">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <section id="gallery" className="rounded-3xl bg-white p-8 md:p-12 shadow-lg">
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">Pet Moments Gallery</h2>
            <p className="text-lg text-gray-600">
              Playtime, shopping adventures, and happy moments from our community.
            </p>
          </div>
          <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryMoments.map((moment, idx) => (
              <article
                key={moment.src}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 shadow-md hover:shadow-xl transition ${
                  idx === 0 ? "lg:col-span-2 lg:row-span-2" : idx === 1 ? "lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={moment.src}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end opacity-0 group-hover:opacity-100 transition">
                  <p className="text-sm font-bold text-white p-4">{moment.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <div className="rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-12 text-white shadow-lg md:p-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">This Week&apos;s Special Offers</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-base">
            {offers.map((offer) => (
              <li key={offer} className="flex items-start gap-3">
                <span className="text-orange-400 font-bold text-xl mt-1">✓</span>
                <span>{offer}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8">What Pet Parents Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} name={review.name} text={review.text} rating={review.rating} />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-10 text-center shadow-lg md:p-16">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Visit Our Store</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Experience our premium collection in person in Balewadi, Pune. Get expert guidance from our passionate team.
          </p>
          <Link
            href="/store"
            className="inline-flex rounded-lg bg-gray-900 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-gray-800 transition"
          >
            Get Directions
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
}
