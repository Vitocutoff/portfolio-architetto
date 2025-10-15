"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `${pathname === path ? "text-sky-800 font-semibold cursor-default" : "hover:text-sky-900"} transition-colors`;

  const menuItems = [
    { href: "/", label: "Home", style: "skew", skewDir: 1 },
    { href: "/01-cv", label: "CV", style: "clip" },
    { href: "/02-impianti-sportivi", label: "Impianti Sportivi", style: "dance" },
    { href: "/03-elenco-progetti", label: "Elenco Progetti", style: "skew", skewDir: -1 },
    { href: "/04-work-in-progress", label: "Work in Progress", style: "clip" },
    { href: "/05-contatti", label: "Contatti", style: "dance" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const variants = {
    skew: (custom) => ({
      hidden: { opacity: 0, y: 70, skewY: 12 * custom },
      show: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { type: "spring", stiffness: 160, damping: 12 },
      },
    }),
    clip: {
      hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
      show: {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        transition: { type: "spring", stiffness: 110, damping: 16, duration: 0.6 },
      },
    },
    dance: {
      hidden: { opacity: 0, y: 60, rotate: -20 },
      show: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 160, damping: 14, duration: 0.8 },
      },
    },
  };

  const hoverEffect = {
    whileHover: { scale: 1.1, rotate: -1 },
    transition: { type: "spring", stiffness: 280, damping: 12 },
  };

  return (

    <nav>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-6 font-sans tracking-wide
                   text-black/80 text-lg
                   overflow-visible px-2"
      >

        {menuItems.map((itemData) => (

          <motion.li
            key={itemData.href}
            custom={itemData.skewDir}
            variants={variants[itemData.style]}
            {...(pathname !== itemData.href ? hoverEffect : {})}
          >

            <Link
              href={itemData.href}
              className={linkClass(itemData.href)}
            >

              {itemData.label}

            </Link>

          </motion.li>
        ))}
      </motion.ul>

    </nav>
  );
}
