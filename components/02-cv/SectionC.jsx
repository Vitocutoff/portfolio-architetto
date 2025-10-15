"use client";

import { motion } from "framer-motion";

export default function SectionA() {
  return (
    <section
      className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start min-h-80 px-[8% py-16 box-border] bg-gray-100"
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
          pubblica
        </h2>

        <h3
          className="text-4xl lg:5xl uppercase mt-2 font-sans text-gray-600 font-extralight"
        >
          amministrazione
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
              2010 - oggi
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Membro CEC esperto BB.AA. per il comune di<br />
              Grisignano di Zocco (VICENZA)
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2002 - oggi
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Membro rappresentante C.O.N.I. della<br />
              Commissione di Vigilanza Pubblici Spettacoli -<br />
              Prefettizia per impianti sportivi
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2016 - 2017
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Membro del Consiglio di Amministrazione<br />
              - rappresentante MIUR - “FONDAZIONE I.U.A.V.” di<br />
              Venezia.
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2002 - 2015
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Membro rappresentante C.O.N.I. - Commissioni di<br />
              vigilanza Pubblici Spettacoli Comunali per impianti<br />
              sportivi. Prefettizia per impianti sportivi.<br />
              Tutti i comuni della provincia di Vicenza.
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2010 - 2012
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Consulente per l'impiantistica sportiva del C.O.N.I.<br />
              - Comitato Provinciale di Vicenza
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2001 - 2009
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Vice Consulente per l'impiantistica sportiva del<br />
              C.O.N.I. - Comitato Provinciale di Vicenza
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2006 - 2007
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Membro CEC esperto BB.AA. per il comune di<br />
              Longare - VICENZA
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              2000 - 2005
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
              Membro CEC - Comune di Creazzo - VICENZA
            </p>

          </div>

        </div>

        <div
          className="flex items-start gap-4"
        >

          <span
            className="text-3xl leading-none m-0 text-red-500 font-extralight"
          >
            &gt;
          </span>

          <div>

            <h4
              className="text-xl m-0 font-serif text-gray-900"
            >
              1996 - 1998
            </h4>

            <p
              className="text-lg leading-relaxed m-0 font-extralight"
            >
             Assessore all' Urbanistica ed Edilizia Privata<br />
             Comune di Sovizzo - VICENZA
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
