"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/header/MobileMenu";
import DesktopMenu from "@/components/header/DesktopMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showLogo, setShowLogo] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setShowLogo(true);
      return;
    }

    const unsubscribe = scrollY.on("change", (latest) => {
      const trigger = window.innerHeight * 0.6;
      setShowLogo(latest > trigger);
    });

    return () => unsubscribe();
  }, [scrollY, pathname]);

  return (
    <header
      className="backdrop-blur-xl backdrop-saturate-200 bg-white/40
                 fixed flex items-center justify-between left-0 px-4 py-2 md:py-3 lg:py-4 top-0
                 w-full z-50 border-b border-white/30 shadow-lg"
    >

      <div
        className="flex items-center"
      >

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0 }}
          className="font-qwitcher font-semibold text-3xl"
        >
          Mauro Concentri
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }}
          className="font-thin ml-2 text-red-500 text-3xl"
        >
          |
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.6 }}
          className="font-mono ml-2 text-sky-900"
        >
          Architetto
        </motion.span>

      </div>

      <div
        className="hidden lg:flex"
      >

        <DesktopMenu />

      </div>

      <div
        className="block lg:hidden"
      >

        <MobileMenu
          isOpen={menuOpen}
          toggleMenu={() => setMenuOpen(!menuOpen)}
          closeMenu={() => setMenuOpen(false)}
        />

      </div>

    </header>
  );
}
