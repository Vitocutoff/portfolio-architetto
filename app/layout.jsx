import "./globals.css";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mauro Concentri | Architetto",
  description: "Portfolio di Mauro Concentri Architetto a Vicenza",
  metadataBase: new URL("https://www.mauroconcentriarchitetto.com"),
  openGraph: {
    title: "Mauro Concentri | Architetto",
    description: "Portfolio di Mauro Concentri Architetto a Vicenza",
    url: "https://www.mauroconcentriarchitetto.com",
    siteName: "Mauro Concentri Architetto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (

    <html
      lang="it"
    >

      <head>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

      </head>

      <body>

        {/* SKIP LINK PER ACCESSIBILITA' (PER SCREEN READER) */}
        <a
          href="#main-content"
          className="skip-link"
        >

          Vai al contenuto

        </a>

        {/* BANNER COOKIE LATO CLIENT */}
        <CookieBanner />

        <Header />

        <main
          id="main-content"
          role="main"
        >

          {children}

        </main>

        <Footer />

      </body>

    </html>
  );
}
