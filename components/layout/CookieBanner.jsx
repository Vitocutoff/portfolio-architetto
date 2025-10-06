"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setTimeout(() => setShow(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  return (

    <aside
      role="region"
      aria-label="Banner Cookie"
      className={`fixed bottom-0 left-0
                  w-full z-50 transition-transform
                  duration-500 transform
                  ${show ? "translate-y-0" : "translate-y-full"}`}
    >

      <div
        className="bg-white/90 backdrop-blur border-t
                   border-gray-300 shadow-xl p-5 flex
                   flex-col lg:flex-row items-center mx-auto
                   justify-between gap-4 max-w-[1200px]"
      >

        <p
          className="text-gray-800 text-sm leading-relaxed"
        >

          Questo sito utilizza <strong>solo cookie tecnici</strong>
          per garantire il corretto funzionamento del sito e migliorare
          l’esperienza di navigazione. Non raccogliamo dati per profilazione
          o pubblicità. Continuando a navigare accetti l’utilizzo dei cookie.
          Per maggiori informazioni, consulta la nostra{" "}

          <Link
            href="/privacy-policy"
            className="underline text-gray-700 hover:text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-black
                       rounded"
          >

            Privacy Policy

          </Link>.

        </p>

        <div
          className="flex items-center gap-3
                     shrink-0 mt-3 lg:mt-0"
        >

          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-black
                       text-white rounded-xl
                       hover:bg-gray-900
                       transition text-sm
                       focus:outline-none
                       focus:ring-2
                       focus:ring-black"
          >

            OK

          </button>

        </div>

      </div>

    </aside>
  );
}
