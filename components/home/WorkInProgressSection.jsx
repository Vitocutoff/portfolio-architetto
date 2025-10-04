"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkInProgressSection() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2, filter: "blur(12px) saturate(0.7)", x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px) saturate(1)",
      x: 0,
      transition: { duration: 1.4, ease: [0.25, 0.8, 0.25, 1] }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, letterSpacing: "0.25em", rotateX: 30 },
    visible: {
      opacity: 1,
      letterSpacing: "0em",
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.5 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 10, delay: 1 }
    },
    idle: {
      x: [0, 5, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section
      className="bg-[url('/images/workBg.jpg')] bg-cover bg-center lg:min-h-[85vh] flex items-center relative"
    >

      <div
        className="max-w-7xl mx-auto px-4 w-full"
      >

        <div
          className="flex flex-col lg:flex-row rounded-lg lg:rounded-xl overflow-hidden shadow-lg bg-gray-50 py-12 lg:py-0"
        >

          <motion.div
            className="lg:w-3/4"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <Image
              src="/images/workImg.jpg"
              alt="work"
              width={1200}
              height={900}
              className="object-cover w-full h-full"
            />

          </motion.div>

          <div
            className="p-8 flex flex-col justify-center items-center lg:w-1/4"
          >

            <motion.h3
              className="text-4xl font-thin mb-6 text-center"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              Work in Progress
            </motion.h3>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              animate="idle"
              whileHover="hover"
              viewport={{ once: true }}
              className="px-4 py-2 bg-black text-white rounded-xl text-lg hover:bg-gray-900 transition"
            >
              Scopri
            </motion.button>

          </div>

        </div>

      </div>

    </section>
  );
}
