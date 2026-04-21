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
      className="group relative h-40 overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <h3 className="text-lg font-semibold text-white p-4 w-full">{name}</h3>
      </div>
    </Link>
  );
}
