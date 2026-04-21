import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  name: string;
  image: string;
};

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <Link href={`/shop?category=${encodeURIComponent(name)}`} className="group">
      <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover group-hover:scale-125 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-6">
          <h3 className="text-2xl font-black text-white group-hover:translate-y-1 transition-transform">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
