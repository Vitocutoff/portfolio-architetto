"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LogoCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10; // tilt X
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // tilt Y
    setRotate({ x: x, y: y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="px-14 py-8 lg:px-20 border-2 border-black/50 rounded-xl bg-white/20 backdrop-blur-md shadow-lg cursor-pointer select-none"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="font-changa text-3xl lg:text-4xl text-black/70"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        MAURO
      </motion.div>

      <motion.div
        className="font-changa text-3xl lg:text-4xl text-black/70"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        CONCENTRI
      </motion.div>

      <motion.hr
        className="my-3 lg:my-4 border-t border-black/40 w-full"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      />

      <motion.div
        className="text-2xl lg:text-3xl font-mono text-sky-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        Architetto
      </motion.div>
    </motion.div>
  );
}
