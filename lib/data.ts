export type Product = {
  id: string;
  name: string;
  price: number;
  discount: number;
  category: "Dog" | "Cat" | "Birds" | "Fish" | "Accessories";
  brand: string;
  image: string;
  rating: number;
  description: string;
};

export const categories = [
  { name: "Dog", image: "/products/dog.svg" },
  { name: "Cat", image: "/products/cat.svg" },
  { name: "Birds", image: "/products/birds.svg" },
  { name: "Fish", image: "/products/fish.svg" },
  { name: "Accessories", image: "/products/accessories.svg" },
] as const;

export const products: Product[] = [
  {
    id: "royal-canin-maxi",
    name: "Royal Canin Maxi Adult Dry Dog Food",
    price: 2899,
    discount: 12,
    category: "Dog",
    brand: "Royal Canin",
    image: "/products/royal-canin.svg",
    rating: 4.9,
    description:
      "Nutrient-rich premium dry food formulated for large breed adult dogs with healthy digestion support.",
  },
  {
    id: "pedigree-pro",
    name: "Pedigree PRO Expert Nutrition",
    price: 1799,
    discount: 15,
    category: "Dog",
    brand: "Pedigree",
    image: "/products/pedigree.svg",
    rating: 4.7,
    description:
      "Balanced everyday nutrition with quality proteins and vitamins for active dogs.",
  },
  {
    id: "whiskas-tuna",
    name: "Whiskas Tuna Adult Cat Food",
    price: 899,
    discount: 10,
    category: "Cat",
    brand: "Whiskas",
    image: "/products/cat-food.svg",
    rating: 4.8,
    description:
      "Tuna-flavored complete cat food crafted for coat health, immunity, and taste cats love.",
  },
  {
    id: "bird-seed-mix",
    name: "Premium Bird Seed Mix",
    price: 499,
    discount: 8,
    category: "Birds",
    brand: "Nutripet",
    image: "/products/bird-feed.svg",
    rating: 4.6,
    description:
      "Fresh seed blend for parrots and finches with natural minerals and energy-rich grains.",
  },
  {
    id: "aqua-pellets",
    name: "Aqua Gold Fish Food Pellets",
    price: 349,
    discount: 5,
    category: "Fish",
    brand: "Aqua Gold",
    image: "/products/fish-food.svg",
    rating: 4.5,
    description:
      "Floating pellets designed for improved color, growth, and clear water nutrition.",
  },
  {
    id: "plush-rope-toy",
    name: "Interactive Plush Rope Toy",
    price: 699,
    discount: 20,
    category: "Accessories",
    brand: "PawPlay",
    image: "/products/toy.svg",
    rating: 4.8,
    description:
      "Soft yet durable tug toy ideal for chewing, fetch, and indoor engagement.",
  },
  {
    id: "orthopedic-bed",
    name: "Orthopedic Comfort Pet Bed",
    price: 2499,
    discount: 18,
    category: "Accessories",
    brand: "CozyPaws",
    image: "/products/bed.svg",
    rating: 4.9,
    description:
      "Memory foam support bed with removable washable cover for premium sleep comfort.",
  },
  {
    id: "cat-scratcher",
    name: "Natural Sisal Cat Scratching Post",
    price: 1299,
    discount: 11,
    category: "Accessories",
    brand: "FelineHome",
    image: "/products/scratcher.svg",
    rating: 4.7,
    description:
      "Space-saving scratching post that protects furniture and supports healthy claws.",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Aditi Kulkarni",
    text: "The quality is incredible. My lab switched to Royal Canin and loves it. Fast same-day delivery too.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    text: "Very premium store setup and genuine products. The team guided me perfectly for my cat.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Patil",
    text: "Best prices in Balewadi and great service on WhatsApp orders. Highly recommended.",
    rating: 5,
  },
];

export const offers = [
  "Up to 20% OFF on premium pet food",
  "Buy 2 toys, get 1 free",
  "Free delivery in Balewadi on orders above ₹999",
];
