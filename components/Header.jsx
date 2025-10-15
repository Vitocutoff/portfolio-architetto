"use client";

import DesktopMenu from "@/components/00-header/DesktopMenu";
import MobileMenu from "@/components/00-header/MobileMenu";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Major_Mono_Display } from "next/font/google";

const monospace = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400"
});

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
      className="fixed top-0 left-0 w-full z-50 border-b border-white/5
                 bg-gradient-to-r from-white/70 via-white/60 to-white/70
                 backdrop-blur-xl backdrop-saturate-200 shadow-xl"
    >

      <div
        className="max-w-screen-xl mx-auto flex
                   items-center justify-between
                   px-4 py-3 md:py-4 lg:py-5"
      >

        {/* LOGO DELL'HEADER CHE APPARE DOPO LO SCROLL DELLA PAGINA */}
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
            className="font-corsivo font-semibold text-4xl text-black/90"
          >

            Mauro Concentri

          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }}
            className="font-thin text-3xl text-red-600/85"
            aria-hidden="true"
          >

            |

          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.6 }}
            className={`${monospace.className}
                        text-blue-900/95
                        font-semibold md:text-xl
                        tracking-wider`}
          >

            ArChItEttO

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
