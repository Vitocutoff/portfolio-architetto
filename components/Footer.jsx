import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Reem_Kufi_Fun, Major_Mono_Display } from "next/font/google";

const navigation = Reem_Kufi_Fun({
  subsets: ["latin"],
  weight: "400",
});

const monospace = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full relative"
    >

      <div
        className="text-gray-400 py-10 bg-gradient-to-br from-neutral-900
                   via-neutral-800 to-neutral-900"
      >

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6"
        >

          <div
            className="text-center"
          >

            <div
              className="flex justify-center gap-x-8 mt-4 mb-10 text-3xl"
            >

              <FaPhoneAlt
                aria-label="Telefono fisso"
                className="text-blue-500"
              />

              <FaMobileAlt
                aria-label="Cellulare"
                className="text-neutral-100"
              />

              <FaEnvelope
                aria-label="Email"
                className="text-pink-500/90"
              />

            </div>

            <p
              className={`text-2xl mb-4 text-blue-200/90
                          tracking-widest
                          ${navigation.className}`}
            >

              Studio:
              <span
                className="font-serif text-xl ml-4
                           text-neutral-100"
              >

                +39 0444 301913

              </span>

            </p>

            <p
              className={`text-2xl mb-4
                          text-blue-200/90
                          tracking-widest
                          ${navigation.className}`}
            >

              Cellulare:
              <span
                className="font-serif text-xl ml-4
                           text-neutral-100"
              >

                +39 340 7631501

              </span>

            </p>

            <p
              className={`text-2xl mb-4 text-blue-200/90
                          tracking-widest
                          ${navigation.className}`}
            >
              E-mail:
              <span
                className="font-serif text-xl ml-4
                           text-neutral-100"
              >

                archcon@goldnet.it

              </span>

            </p>

          </div>

          <div
            className="flex justify-center items-center"
          >

            <div
              className="border border-white/80 rounded-md
                         px-12 py-6 text-center inline-block"
            >

              <div
                className={`text-2xl font-extrabold uppercase
                            tracking-widest text-white
                            ${navigation.className}`}
              >
                mauro
              </div>

              <div
                className={`text-2xl font-extraboldbold uppercase
                            tracking-widest text-white
                            ${navigation.className}`}
              >
                concentri
              </div>

              <div
                className="border-t border-white/50
                           mx-auto my-4"
              ></div>

              <div
                className="text-2xl tracking-wider
                           font-mono text-blue-200/90"
              >
                <span className={monospace.className}>A</span>rchitetto
              </div>

            </div>

          </div>

          <div
            className="text-center mt-4"
          >

            <p
              className="text-xl mb-4 text-neutral-100 font-serif"
            >
              Corso Padova, 65 - 36100 Vicenza
            </p>

            <p
              className="text-lg mb-4"
            >
              C.F. <span
                     className="font-serif text-gray-100"
                   >
                    CNCMRA62L07Z103J
                   </span>

            </p>

            <p
              className="text-lg mb-4"
            >
              P.I. <span
                     className="font-serif text-gray-100"
                   >
                    02069980247
                   </span>

            </p>

            <div
              className="flex justify-center items-center gap-x-8 mt-10 text-3xl"
            >

              <FaFacebookF className='text-blue-500' />

              <FaLinkedinIn className='text-gray-100' />

              <FaInstagram className='text-pink-500' />

            </div>

          </div>

        </div>

      </div>

      <div
        className="bg-gradient-to-r from-white/75 via-white to-white/75
                   text-black/60 text-center py-4 font-mono font-extralight"
      >

        &copy; {year} Mauro Concentri | Architetto

      </div>

    </footer>
  );
}
