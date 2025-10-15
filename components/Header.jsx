"use client";

import DesktopMenu from "@/components/00-header/DesktopMenu";
import MobileMenu from "@/components/00-header/MobileMenu";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      role="banner"
      className="fixed top-0 left-0 w-full z-50
                 border-b border-white/5
                 bg-white/40 backdrop-blur-lg
                 backdrop-saturate-200 shadow-2xl
                 transition-colors duration-300"
    >

      <div
        className="max-w-screen-xl mx-auto flex
                   items-center justify-between
                   px-4 py-3 md:py-4 lg:py-5"
      >

        {/* LOGO */}
        <Link
          href="/"
          aria-label="Torna alla homepage di Mauro Concentri Architetto"
          className="flex items-center gap-2
                     focus:outline-none rounded"
        >

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0 }}
            className="font-qwitcher font-semibold text-4xl"
          >

            Mauro Concentri

          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }}
            className="font-thin text-3xl text-red-500"
            aria-hidden="true"
          >

            |

          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.6 }}
            className="font-mono text-sky-900"
          >

            Architetto

          </motion.span>

        </Link>

        {/* NAVIGATION */}
        <nav
          aria-label="Menu principale"
          className="hidden lg:flex"
        >

          <DesktopMenu />

        </nav>

        {/* MOBILE MENU */}
        <div
          className="block lg:hidden"
        >

          <MobileMenu
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen(!menuOpen)}
            closeMenu={() => setMenuOpen(false)}
            aria-expanded={menuOpen}
            aria-label="Menu mobile"
          />

        </div>

      </div>

    </header>
  );
}
