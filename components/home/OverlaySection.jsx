"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function OverlaySection({ footerHeight = 120 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const yText = useTransform(scrollYProgress, [0, 0.6], ["90px", "0px"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scaleText = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);

  const quotes = [
    "Ogni progetto è un dialogo tra spazio e persone.",
    "L'architettura non si guarda, si vive.",
    "Costruire significa dare forma alle emozioni.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  function splitBalanced(text) {
    if (text.includes("\n")) return text.split("\n");
    const words = text.split(" ");
    if (words.length < 4) return [text];
    const mid = Math.floor(words.length / 2);
    return [
      words.slice(0, mid).join(" "),
      words.slice(mid).join(" ")
    ];
  }

  return (
    <div
      ref={ref}
      className="relative bg-white m-0 p-0"
      style={{ height: `calc(100vh + ${footerHeight}px)` }}
    >

      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <motion.div
          className="absolute inset-0 -z-10 will-change-transform"
          style={{ y: yImage }}
        >

          <Image
            src="/images/overlayImg.jpg"
            alt="overlay"
            fill
            className="object-cover"
            priority
          />

        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: yText, opacity: opacityText, scale: scaleText }}
          transition={{ type: "tween", ease: "easeOut", duration: 2.2 }}
        >

          <div
            className="border-2 border-gray-700 bg-white/70 backdrop-blur-sm text-center rounded-xl"
            style={{
              width: "min(88%, 560px)",
              padding: "2.5rem 1.5rem",
            }}
          >

            <div
              className="relative overflow-hidden mb-2 flex items-center justify-center"
              style={{ height: "130px", width: "100%" }}
            >

              <AnimatePresence
                mode="wait"
              >

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full"
                >
                  {splitBalanced(quotes[index]).map((line, i) => (

                    <p
                      key={i}
                      className="text-xl lg:text-3xl font-extralight text-gray-600 font-serif italic leading-snug"
                      style={{ margin: 0 }}
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>

              </AnimatePresence>

            </div>

            <div
              className="w-full h-[1px] bg-gray-700 mx-auto my-1"
            ></div>

            <div
              className="flex justify-center items-center space-x-4 mt-1"
            >

              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="text-2xl font-bold"
              >
                *
              </motion.span>

              <h3
                className="text-4xl lg:text-5xl capitalize font-qwitcher leading-tight tracking-wide mt-5"
              >
                [ mauro concentri ]
              </h3>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}
