"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollPetSides() {
  const { scrollY } = useScroll();
  const leftY = useTransform(scrollY, [100, 1000], [100, -200]);
  const rightY = useTransform(scrollY, [100, 1000], [100, -200]);
  const leftOpacity = useTransform(scrollY, [100, 300, 1000], [0, 1, 0.6]);
  const rightOpacity = useTransform(scrollY, [300, 500, 1200], [0, 1, 0.6]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ y: leftY, opacity: leftOpacity }}
        className="pointer-events-none fixed left-0 top-1/3 z-10 hidden xl:block"
      >
        <div className="relative h-64 w-64">
          <Image
            src="/scroll-dog-left.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ y: rightY, opacity: rightOpacity }}
        className="pointer-events-none fixed right-0 top-1/2 z-10 hidden xl:block"
      >
        <div className="relative h-64 w-64">
          <Image
            src="/scroll-cat-right.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </>
  );
}
