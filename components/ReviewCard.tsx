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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-gradient-to-br from-white to-orange-50 p-8 shadow-lg hover:shadow-xl border border-orange-100 transition-all"
    >
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-2xl ${i < rating ? "text-orange-500" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
      <p className="mb-6 text-gray-700 text-lg leading-relaxed italic">"{text}"</p>
      <div className="flex items-center justify-between">
        <p className="font-black text-gray-900">{name}</p>
        <div className="text-2xl">🐾</div>
      </div>
    </motion.article>
  );
}
