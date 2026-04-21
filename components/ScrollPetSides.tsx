"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollPetSides() {
  const { scrollY } = useScroll();
  const leftY = useTransform(scrollY, [0, 800], [0, 120]);
  const rightY = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ y: leftY }}
        className="pointer-events-none fixed left-2 top-1/2 z-10 hidden -translate-y-1/2 xl:block"
      >
        <div className="rounded-[2rem] border border-amber-200/70 bg-white/80 p-2 shadow-lg backdrop-blur">
          <Image src="/products/dog.svg" alt="" width={120} height={120} className="h-28 w-28 rounded-3xl object-cover" />
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ y: rightY }}
        className="pointer-events-none fixed right-2 top-1/2 z-10 hidden -translate-y-1/2 xl:block"
      >
        <div className="rounded-[2rem] border border-amber-200/70 bg-white/80 p-2 shadow-lg backdrop-blur">
          <Image src="/products/cat.svg" alt="" width={120} height={120} className="h-28 w-28 rounded-3xl object-cover" />
        </div>
      </motion.div>
    </>
  );
}
