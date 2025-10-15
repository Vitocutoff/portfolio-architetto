"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function PreviewSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cards = [
    { img: "/images/palazzetti.jpg", title: "Palazzetti", link: "#" },
    { img: "/images/atletica.jpg", title: "Piste di atletica", link: "#" },
    { img: "/images/piscine.jpg", title: "Acquapark e Piscine", link: "#" },
    { img: "/images/campi.jpg", title: "Campi in Erba Sintetica", link: "#" },
  ];

  const baseColors = ["rgba(254, 231, 159, 0.1)", "rgba(108, 162, 206, 0.1)", "rgba(170, 221, 206, 0.1)", "rgba(242, 183, 77, 0.1)"];
  const hoverColors = ["rgba(254, 231, 159, 0.05)", "rgba(108, 162, 206, 0.05)", "rgba(170, 221, 206, 0.05)", "rgba(242, 183, 77, 0.05)"];

  const scrollY = useMotionValue(0);
  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const parallaxY = cards.map((_, i) =>
    useTransform(scrollY, [0, 500], [0, -10 - i * 5])
  );

  const parallaxColor = cards.map((_, i) =>
    useTransform(scrollY, [0, 500], [baseColors[i], hoverColors[i]])
  );

  return (
    <section
      className="bg-gray-100 flex flex-col items-center py-16"
    >

      <div
        className="max-w-7xl mx-auto px-4 w-full"
      >

        <motion.h2
          className="text-xl lg:text-2xl text-left font-serif font-thin uppercase text-gray-700"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Impianti Sportivi
        </motion.h2>

        <motion.p
          className="font-sans mb-10 text-5xl lg:text-7xl text-gray-500 font-extralight flex items-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span
            className="text-red-400 mr-2"
          >
            &rsaquo;
          </span>

          preview
        </motion.p>

        <div
          className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            {cards.map((card, i) => (

              <motion.div
                key={i}
                style={{ y: parallaxY[i], backgroundColor: parallaxColor[i] }}
                className="rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={i * 0.2}
              >
                {card.img ? (

                  <Image
                    src={card.img}
                    alt={card.title}
                    width={400}
                    height={400}
                    className="rounded-t-xl object-cover w-full h-64"
                  />
                ) : (

                  <div
                    className="rounded-t-xl w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400 font-semibold"
                  >
                    Placeholder
                  </div>
                )}

                <div
                  className="p-6 flex flex-col flex-1"
                >

                  <h3
                    className="text-2xl mb-6 text-center font-thin leading-snug text-gray-700"
                  >
                    {card.title}
                  </h3>

                  <div
                    className="mx-auto mt-auto"
                  >

                    <a
                      href={card.link}
                      className="mt-4 px-4 py-2 bg-gray-950/80 hover:bg-gray-800/60 text-white rounded-xl shadow-lg font-medium transition-colors"
                    >
                      Scopri
                    </a>

                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </section>
  );
}
