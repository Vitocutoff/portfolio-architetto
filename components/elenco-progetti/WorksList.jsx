"use client";

import { motion } from "framer-motion";
import { works2021_2025, works2016_2020, works2011_2015, works2001_2010, works1989_2000 } from "@/data/worksData";

function renderWorks(works, bgColor="bg-white") {
  if (!works.length) {
    return <p
            className="text-gray-500 italic"
           >
            Nessun lavoro per questo periodo.
           </p>;
  }

  return (
    <div
      className="grid gap-8"
    >

      <motion.div
        className={`${bgColor} shadow-lg border border-gray-200 rounded-xl px-24 py-16 cursor-pointer`}
        whileHover={{ boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" }}
      >
        {works.map((w, i) => (

          <div
            key={i}
          >

            <h3
              className="font-semibold mb-0 text-black"
            >
              <span
                className="font-serif text-lg"
              >
                {w.year}</span> - Comune di {w.comune}
            </h3>

            <p
              className="text-gray-800 font-mono font-extralight"
            >
              {w.descrizione}<br />
              {w.importo && <>Importo: {w.importo}<br /></>}

              <span
                className="font-semibold text-lg font-serif"
              >
                ID Opere: {w.id}
              </span><br />

              {w.stato && <>{w.stato}</>}
            </p>

            {i !== works.length - 1 && <div className="mt-8"></div>}
          </div>
        ))}
      </motion.div>

    </div>
  );
}

export default function WorkList() {
  return (
    <div>
      <section
        id="2021-2025"
        className="bg-white py-20 px-6 lg:px12"
      >

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >

          <h2
            className="text-4xl lg:text-5xl font-serif italic mb-2"
          >
            2021 - 2025
          </h2>

          <p
            className="text-md lg:text-lg font-sans mb-12"
          >
            I lavori di questo periodo:
          </p>

          {renderWorks(works2021_2025)}
        </motion.div>

      </section>

      <section
        id="2016-2020"
        className="bg-gray-100 py-20 px-6 lg:px-12"
      >

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >

          <h2
            className="text-4xl lg:text-5xl font-serif italic mb-2"
          >
            2016 - 2020
          </h2>

          <p
            className="text-sm lg:text-lg font-sans mb-12"
          >
            I lavori di questo periodo:
          </p>

          {renderWorks(works2016_2020, "bg-white")}
        </motion.div>

      </section>

      <section
        id="2011-2015"
        className="bg-white py-20 px-6 lg:px-12"
      >

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >

          <h2
            className="text-4xl md:text-5xl font-serif italic mb-2"
          >
            2011 - 2015
          </h2>

          <p
            className="text-md lg:text-lg font-sans mb-12"
          >
            I lavori di questo periodo:
          </p>

          {renderWorks(works2011_2015, "bg-gray-100")}
        </motion.div>

      </section>

      <section
        id="2001-2010"
        className="bg-gray-100 py-20 px-6 lg:px-12"
      >

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >

          <h2
            className="text-4xl lg:text-5xl font-serif italic mb-2"
          >
            2001 - 2010
          </h2>

          <p
            className="text-md lg:text-lg font-sans mb-12"
          >
            I lavori di questo periodo:
          </p>

          {renderWorks(works2001_2010)}
        </motion.div>

      </section>

      <section
        id="1989-2000"
        className="bg-white py-20 px-6 lg:px-12"
      >

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >

          <h2
            className="text-4xl lg:text-5xl font-serif italic mb-2"
          >
            1989 - 2000
          </h2>

          <p
            className="text-md lg:text-lg font-sans mb-12"
          >
            I lavori di questo periodo:
          </p>

          {renderWorks(works1989_2000)}
        </motion.div>

      </section>

    </div>
  );
}
