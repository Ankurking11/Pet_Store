import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Visit Our Pet Store in Balewadi Pune",
  description:
    "Visit Pet’s Bay & Co at Shop no.1, Elite Premio, Balewadi, Pune for premium pet food, toys and accessories.",
  keywords: ["pet store address balewadi", "pet shop near me pune", "pets bay and co"],
};

export default function StorePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-gray-900">Pet’s Bay & Co</h1>
        <p className="mt-2 text-gray-700">Shop no.1, Elite Premio, Balewadi, Pune</p>
        <div className="mt-5 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
          <div>
            <p className="font-medium text-gray-800">Opening Hours</p>
            <p>Mon - Sun: 9:00 AM - 9:30 PM</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">Phone</p>
            <a href="tel:+918484086474" className="text-amber-600">
              +91 84840 86474
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <iframe
          title="Pet’s Bay & Co Location"
          src="https://www.google.com/maps?q=Elite%20Premio%20Balewadi%20Pune&output=embed"
          className="h-[320px] w-full md:h-[420px]"
          loading="lazy"
        />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">Store Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["store-1", "store-2", "store-3"].map((image) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#FFF7E8]">
              <Image
                src={`/store/${image}.svg`}
                alt={`Pet’s Bay store ${image}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
