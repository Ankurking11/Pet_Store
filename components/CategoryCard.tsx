import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  name: string;
  image: string;
};

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(name)}`}
      className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-[#FFF7E8]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-semibold text-gray-900">{name}</h3>
    </Link>
  );
}
