import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetailActions from "@/components/ProductDetailActions";
import { products } from "@/lib/data";
import { formatCurrency, getDiscountedPrice } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  return {
    title: product ? `${product.name} in Balewadi Pune` : "Product Not Found",
    description: product
      ? `${product.description} Shop now at Pet’s Bay & Co, Balewadi Pune.`
      : "Product unavailable at Pet’s Bay & Co.",
    keywords: product ? [product.name, product.category, product.brand, "pet store balewadi"] : [],
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 pb-28 sm:px-6 lg:px-8 md:pb-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#FFF7E8]">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-xl bg-[#FFF7E8]">
                <Image src={product.image} alt={`${product.name} view ${index}`} fill className="object-cover" sizes="180px" />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">{product.category}</p>
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-semibold text-gray-900">{formatCurrency(discountedPrice)}</p>
            <p className="text-gray-400 line-through">{formatCurrency(product.price)}</p>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
              {product.discount}% OFF
            </span>
          </div>
          <p className="text-sm text-gray-600">⭐ {product.rating} Rating</p>
          <p className="text-gray-700">{product.description}</p>
          <ProductDetailActions
            id={product.id}
            name={product.name}
            image={product.image}
            price={discountedPrice}
          />
        </section>
      </div>
    </div>
  );
}
