"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import LogoCard from "./LogoCard";

export default function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageIndex = useTransform(scrollYProgress, [0, 1], [0, 3]);

  const images = [
    "/images/heroImg.png",
    "/images/heroImg2.png",
    "/images/heroImg3.png",
  ];

  return (
    <section
      ref={targetRef}
      role="banner"
      aria-label="Sezione introduttiva"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white"
    >
      {/* Background fisso */}
      <div className="fixed inset-0 h-screen w-full overflow-hidden -z-10 bg-black">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: useTransform(
                imageIndex,
                [i - 0.8, i, i + 0.8], // fade più dolce
                [0, 1, 0]
              ),
            }}
          >
            <Image
              src={src}
              alt=""
              priority={i === 0}
              fill
              className="object-cover"
            />
            {/* overlay leggerissimo per evitare flash */}
            <div className="absolute inset-0 bg-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Contenuto della hero */}
      <LogoCard />
    </section>
  );
}
