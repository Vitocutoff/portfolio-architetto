import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full relative"
    >

      <div
        className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-10"
      >

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6"
        >

          <div
            className="text-center"
          >

            <div
              className="flex justify-center gap-x-8 mt-4 mb-6 text-2xl text-gray-100"
            >

              <FaPhoneAlt
                aria-label="Telefono fisso"
              />

              <FaMobileAlt
                aria-label="Cellulare"
              />

              <FaEnvelope
                aria-label="Email"
              />

            </div>

            <p
              className="text-lg mb-4"
            >

              STUDIO <span
                      className="font-serif text-gray-100"
                     >
                       +39 0444 301913
                     </span>
            </p>

            <p
              className="text-lg mb-4"
            >

              CELL <span
                    className="font-serif text-gray-100"
                   >
                     +39 340 7631501
                   </span>

            </p>

            <p
              className="text-lg mb-4"
            >
              EMAIL <span
                      className="font-serif text-gray-100"
                    >
                      archcon@goldnet.it
                    </span>

            </p>

            <p
              className="text-lg mb-4"
            >
              PEC <span
                    className="font-serif text-gray-100"
                  >
                    mauro.concentri@archiworldpec.it
                  </span>

            </p>

          </div>

          <div
            className="flex justify-center items-center"
          >

            <div
              className="border border-white px-11 py-6 text-center inline-block"
            >

              <div
                className="text-lg lg:text-2xl font-bold uppercase tracking-wide text-white"
              >
                mauro
              </div>

              <div
                className="text-lg lg:text-2xl font-bold uppercase tracking-wide text-white"
              >
                concentri
              </div>

              <div
                className="border-t border-white mx-auto my-2"
              ></div>

              <div
                className="text-sm lg:text-lg tracking-wide font-mono text-white"
              >
                architetto
              </div>

            </div>

          </div>

          <div
            className="text-center mt-4"
          >

            <p
              className="text-lg mb-4 text-gray-100 font-serif"
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
              className="flex justify-center items-center gap-x-5 mt-5 text-2xl"
            >

              <FaFacebookF className='text-blue-500' />

              <FaLinkedinIn className='text-gray-100' />

              <FaInstagram className='text-pink-500' />

            </div>

          </div>

        </div>

      </div>

      <div
        className="bg-gray-50 text-gray-700 text-center py-4 text-sm font-mono font-extralight"
      >
        &copy; {year} Mauro Concentri | Architetto
      </div>

    </footer>
  );
}
