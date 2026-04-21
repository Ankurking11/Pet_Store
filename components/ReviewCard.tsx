"use client";

import { motion } from "framer-motion";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function ReviewCard({ name, text, rating }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-gray-200 bg-white p-7 shadow-md hover:shadow-lg transition"
    >
      <p className="mb-4 text-base text-orange-500">{"★".repeat(rating)}</p>
      <p className="mb-5 text-gray-700 text-base leading-relaxed">"{text}"</p>
      <p className="font-bold text-gray-900">{name}</p>
    </motion.article>
  );
}
