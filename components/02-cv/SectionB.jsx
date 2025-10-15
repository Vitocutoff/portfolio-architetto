"use client";

import { motion } from "framer-motion";

export default function SectionA() {
  return (
    <section
      className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start min-h-80 px-[8% py-16 box-border]"
    >

      <motion.div className="flex flex-col justify-start flex-1 lg:pr-8 mt-10 items-end"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  viewport={{ once: true }}
      >

        <h2
          className="text-3xl lg:text-4xl font-normal m-0 font-sans"
        >
          esperienze
        </h2>

        <h3
          className="text-4xl lg:5xl uppercase mt-2 font-sans text-gray-600 font-extralight"
        >
          editoriali
        </h3>

      </motion.div>

      <motion.div className="flex flex-col flex-1 gap-8 lg:pl-8 mt-10 lg:mt-28"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
      >

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none mt-1 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 text-gray-900 font-serif"
            >
              2006
            </h4>

            <p
              className='text-lg leading-relaxed m-0 font-extralight'
            >
              "MANUALE SULL' IMPIANTISTICA SPORTIVA"<br />
              CONI - Comitato Provinciale di Vicenza<br />
              con arch. Luigi Crimi
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
