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
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-orange-50">
      {/* Hero Section */}
      <FadeInSection>
        <div className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-40">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
                  <span className="text-2xl">🐾</span>
                  <span className="text-sm font-semibold text-orange-700">Welcome to Pet's Bay</span>
                </div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-6">
                  Your Pet&apos;s
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Happy Place</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                  Premium pet food, toys & care products in Balewadi. Everything your furry friend deserves, all in one cozy store.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition transform"
                  >
                    Shop Now 🛍️
                  </Link>
                  <a
                    href={WHATSAPP_BASE}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-full hover:bg-green-50 transition"
                  >
                    WhatsApp Order 💬
                  </a>
                </div>
              </div>
              
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-premium-dog.jpg"
                    alt="Happy dog in pet store"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Categories Section */}
      <FadeInSection>
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-lg text-gray-600">Find everything your pet needs</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((category) => (
                <CategoryCard key={category.name} name={category.name} image={category.image} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Products */}
      <FadeInSection>
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600">Handpicked essentials for your pets</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 text-orange-600 font-bold hover:text-orange-700 transition"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Special Offers with Image */}
      <FadeInSection>
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-orange-500 via-orange-400 to-red-400 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6 mb-8">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-semibold">This Week's Hot Deals</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6">Exclusive Offers</h2>
                <ul className="space-y-4 mb-8 text-lg">
                  {offers.map((offer) => (
                    <li key={offer} className="flex items-start gap-3">
                      <span className="text-2xl mt-1">✓</span>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:shadow-lg transition"
                >
                  Claim Your Deal 🎉
                </a>
              </div>
              <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
                <Image
                  src="/special-offer-dog.jpg"
                  alt="Playful dog with special offers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Gallery Section */}
      <FadeInSection>
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Pet Moments Gallery</h2>
              <p className="text-lg text-gray-600">Happy pets, happy families</p>
            </div>
            <div className="grid auto-rows-[250px] gap-4 sm:auto-rows-[300px] lg:gap-6">
              {/* Large featured image */}
              <div className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/gallery-dog-cat-playing.jpg"
                  alt="Dogs and cats playing"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
              
              {/* Gallery grid */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery-customer-with-pet.jpg"
                  alt="Customer with pet"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery-product-display.jpg"
                  alt="Product display"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
              
              <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/pets-playing.jpg"
                  alt="Pets playing"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Reviews */}
      <FadeInSection>
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">What Pet Parents Say</h2>
              <p className="text-lg text-gray-600">Real reviews from our happy customers</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} name={review.name} text={review.text} rating={review.rating} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Visit Our Store</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience our premium collection in person. Our expert team is ready to help you find the perfect products for your furry friends!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/store"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-lg transition"
              >
                Get Directions 📍
              </Link>
              <a
                href="tel:+918484086474"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition"
              >
                Call Us 📞
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
