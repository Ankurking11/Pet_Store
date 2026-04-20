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
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
    >
      <p className="mb-4 text-sm text-amber-500">{"★".repeat(rating)}</p>
      <p className="mb-4 text-gray-700">“{text}”</p>
      <p className="font-semibold text-gray-900">{name}</p>
    </motion.article>
  );
}
