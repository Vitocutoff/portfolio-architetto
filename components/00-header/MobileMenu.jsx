"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Major_Mono_Display, Reem_Kufi_Fun } from "next/font/google";

const monospace = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

const navigation = Reem_Kufi_Fun({
  subsets: ["latin"],
  weight: "400",
});

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
    { href: "/", label: "hoMe" },
    { href: "/01-cv", label: "cV" },
    { href: "/02-impianti-sportivi", label: "iMpiAnti spoRtiVi" },
    { href: "/03-elenco-progetti", label: "elenco pRoGetti" },
    { href: "/04-work-in-progress", label: "WoRk in pRoGRess" },
    { href: "/05-contatti", label: "contAtti" },
  ];

  const linkClass = (path) =>
    `${monospace.className}
     transition-colors tracking-widest
     ${pathname === path
        ? "text-red-600/90 font-semibold"
        : "hover:text-red-900/90"
      }`;

  return (

    <>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        className={`fixed top-2 md:top-3
                    right-4 z-[80] text-3xl
                    transition-colors ${isOpen ? "text-red-900/90" : "text-black/90"}`}
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
                       text-neutral-200"
          >

            <div
              className="flex h-full flex-col
                         items-center justify-center
                         gap-8 px-8 transform -translate-y-10"
            >

              <div
                className="border border-white/70 rounded-md
                           px-11 py-6 text-center inline-block"
              >

                <div
                  className={`text-2xl font-extrabold uppercase
                             tracking-widest ${navigation.className}`}
                >

                  mauro

                </div>

                <div className={`text-2xl font-extrabold ${navigation.className}
                                uppercase tracking-widest`}>
                  concentri
                </div>

                <div
                  className="border-t border-neutral-600/60
                             mx-auto my-2"
                ></div>

                <div
                  className="text-2xl tracking-wider
                             font-mono text-blue-200/90"
                >

                  <span className={monospace.className}>A</span>rchitetto

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
