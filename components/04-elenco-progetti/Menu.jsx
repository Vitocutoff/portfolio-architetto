"use client";

import { motion } from "framer-motion";

const periods = [
  { id: "2021-2025", label: "2021 - 2025" },
  { id: "2016-2020", label: "2016 - 2020" },
  { id: "2011-2015", label: "2011 - 2015" },
  { id: "2001-2010", label: "2001 - 2010" },
  { id: "1989-2000", label: "1989 - 2000" },
];

export default function PeriodMenu() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="flex flex-wrap justify-center gap-6 my-12 bg-gray-200 p-5 shadow"
    >
      {periods.map((period, i) => (

        <motion.div
          key={period.id}
          whileHover={{ scale: 1.05, boxShadow: '0 12px 25px rgba(0,0,0,0.15)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
          onClick={() => handleClick(period.id)}
          className="cursor-pointer bg-white rounded-xl px-8 py-6 text-center shadow-md w-[180px] md:w-[200px] select-none"
        >

          <span
            className="text-xl font-medium font-serif"
          >
            {period.label}
          </span>

        </motion.div>
      ))}
    </div>
  );
}
