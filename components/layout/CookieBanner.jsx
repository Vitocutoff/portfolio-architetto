'use client';

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
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >

      <div
        className="bg-white/90 backdrop-blur-md  border border-gray-300 shadow-xl rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-between gap-4"
      >

        <p
          className="text-gray-800 text-sm leading-relaxed"
        >
          Questo sito utilizza <strong>solo cookie tecnici</strong>, utili per garantire il corretto funzionamento ed una migliore navigazione.
        </p>

        <div
          className="flex items-center gap-4 shrink-0"
        >

          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition text-sm"
          >
            OK
          </button>

          <Link
            href="/privacy-policy"
            className="text-gray-700 underline hover:text-gray-900 text-sm"
          >
            INFO
          </Link>

        </div>

      </div>

    </div>
  );
}
