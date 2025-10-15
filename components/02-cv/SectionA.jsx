"use client";

import { motion } from "framer-motion";

export default function SectionA() {
  return (
    <section
      className='flex flex-col lg:flex-row justify-center lg:justify-start items-center min-h-100 px-[8% py-16 box-border] bg-gray-100 mt-20'
    >

      <motion.div className='flex flex-col md:justify-center lg:justify-start flex-1 lg:pr-8 lg:mt-10 items-end'
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                  viewport={{ once: true }}
      >

        <h2
          className='text-3xl lg:text-4xl font-normal m-0 font-sans'
        >
          esperienze
        </h2>

        <h3
          className='text-4xl lg:text-7xl uppercase mt-2 font-sans text-gray-600 font-extralight'
        >
          didattiche
        </h3>

      </motion.div>

      <motion.div className='flex flex-col flex-1 gap-8 lg:pl-8 mt-10 lg:mt-28'
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
      >

        <div
          className='flex items-start gap-4'
        >

          <span
            className='text-3xl leading-none mt-1 text-red-500 font-extralight'
          >
            &gt;
          </span>

          <div>

            <h4
              className='text-xl m-0 text-gray-900 font-serif'
            >
              2006 - oggi
            </h4>

            <p
              className='text-lg leading-relaxed m-0 font-extralight'
            >
              Istituto comprensivo Statale di Sovizzo (VI)<br />Docente scuola secondaria – “ Tecnologia”
            </p>

          </div>

        </div>

        <div
          className='flex items-start gap-4'
        >

          <span
            className='text-3xl leading-none m-0 text-red-500 font-extralight'
          >
            &gt;
          </span>

          <div>

            <h4
              className='text-xl m-0 font-serif text-gray-900'
            >
              1989 - 2006
            </h4>

            <p
              className='text-lg leading-relaxed m-0 font-extralight'
            >
              Istituto Maria Immacolata “Leone XIII”<br />Scuola paritaria, Montecchio Maggiore (VI)<br />Docente scuola secondaria – “Tecnologia”
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
