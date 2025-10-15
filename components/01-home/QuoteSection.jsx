"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QuoteSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };

  const fromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const fromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const quoteLeft = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } }
  };
  const quoteRight = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
  };

  const fullText =
    "Nel 1989 ho iniziato la mia attività di professionista, occupandomi di urbanistica, edilizia privata, edilizia industriale e lavori pubblici soprattutto nel settore degli impianti sportivi.";
  const words = fullText.split(" ");

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-white px-4 lg:px-20 py-20 lg:py-0 md:min-h-[90vh] flex items-center bg-[url('/images/quoteImg.png')] bg-cover bg-center"
    >

      <motion.div
        variants={quoteLeft}
        className="absolute top-5 left-5"
      >

        <FaQuoteLeft
          className="text-gray-700 text-4xl lg:text-5xl"
        />

      </motion.div>

      <motion.div
        variants={quoteRight}
        className="absolute bottom-5 right-5"
      >

        <FaQuoteRight
          className="text-gray-700 text-3xl lg:text-5xl"
        />

      </motion.div>

      <div
        className="flex flex-col lg:flex-row md:items-center md:gap-12 max-w-6xl mx-auto w-full"
      >

        <motion.div
          variants={fromLeft}
          className="flex-shrink-0 mx-auto lg:mx-0 mb-8 lg:mb-0"
        >

          <Image
            src="/images/mauroconcentri2.png"
            alt="autore"
            width={390}
            height={390}
            className="rounded-full object-cover border shadow-xl"
          />

        </motion.div>

        <div
          className="flex-1 flex flex-col justify-center lg:justify-between gap-8"
        >

          <motion.blockquote
            variants={fromRight}
            className="text-center lg:text-left font-serif italic font-extralight text-4xl lg:text-7xl text-gray-400 leading-snug"
          >
            Progettare è realizzare esperienze di vita.

            <footer
              className="mt-4 text-4xl lg:text-5xl font-qwitcher text-gray-950 text-right lg:text-right"
            >
              - Mauro Concentri
            </footer>

          </motion.blockquote>

          <motion.p
            className="text-center lg:text-right text-gray-700 text-lg lg:text-xl font-mono font-extralight leading-relaxed max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } }
            }}
          >
            {words.map((word, i) => (

              <motion.span
                key={i}
                className="inline-block mr-1"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

        </div>

      </div>

    </motion.section>
  );
}
