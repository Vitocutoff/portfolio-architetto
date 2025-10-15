"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileMenu({ isOpen, toggleMenu, closeMenu }) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/01-cv", label: "CV" },
    { href: "/02-impianti-sportivi", label: "Impianti Sportivi" },
    { href: "/03-elenco-progetti", label: "Elenco Progetti" },
    { href: "/04-work-in-progress", label: "Work in Progress" },
    { href: "/05-contatti", label: "Contatti" },
  ];

  const linkClass = (path) =>
    `text-xl font-medium font-Sans transition-colors ${
      pathname === path
        ? "text-sky-700 font-semibold"
        : "hover:text-sky-500"
    }`;

  return (

    <>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        className={`fixed top-2 md:top-3
                    right-6 z-[80] text-3xl
                    transition-colors ${isOpen ? "text-gray-200" : "text-black"}`}
      >

        {isOpen ? "✕" : "☰"}

      </button>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 w-screen
                       h-screen z-[70]
                       bg-gradient-to-b
                       from-neutral-950
                       via-neutral-900
                       to-neutral-950
                       text-gray-100"
          >

            <div
              className="flex h-full flex-col
                         items-center justify-center
                         gap-8 px-8 transform -translate-y-10"
            >

              <div
                className="border border-white rounded-lg
                           px-11 py-6 text-center inline-block"
              >

                <div
                  className="text-xl font-bold uppercase
                             tracking-wide font-Sans"
                >

                  mauro

                </div>

                <div className="text-xl font-bold font-Sans uppercase tracking-wide">
                  concentri
                </div>

                <div
                  className="border-t border-gray-400
                             mx-auto my-2"
                ></div>

                <div
                  className="text-lg -tracking-wide
                             font-mono"
                >

                  Architetto

                </div>

              </div>

              {links.map((l, i) => (

                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.3 }}
                >

                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    className={linkClass(l.href)}
                  >

                    {l.label}

                  </Link>

                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
