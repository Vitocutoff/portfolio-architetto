import "./globals.css";
import Header from "@/components/layout/Header";
import CookieBanner from "@/components/layout/CookieBanner";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Mauro Concentri | Architetto",
  description: "Portfolio di Mauro Concentri Architetto a Vicenza",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
    >

      <body
        className="bg-white
                   text-black"
      >

        <CookieBanner />

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}
