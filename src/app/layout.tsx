import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// Load the modern Sans font for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Load the elegant Serif font for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clearby Services | Digital Engineering & Growth Agency",
  description:
    "Trusted IT partner for Web & Mobile Development, Blockchain, AI Solutions, and expert Digital Marketing Services in Pune.",
  alternates: {
    canonical: "https://clearbyservices.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://clearbyservices.com/#business",
        name: "Clearby Services",
        image: "https://clearbyservices.com/Dark-favcon.png",
        url: "https://clearbyservices.com",
        telephone: "+91-7020112146",
        email: "contact@clearbyresearch.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "VJ Indilife Sus-Pashan Road, Vardayani Society, Sutarwadi, Pashan",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411021",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5529,
          longitude: 73.7853,
        },
        sameAs: ["https://clearbypolitical.com/"],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}
      suppressHydrationWarning={true}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WFRTLG8N');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          id="theme-switcher-init"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme");
                if (theme === "light") {
                  document.documentElement.classList.remove("dark");
                } else {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-body)] transition-colors duration-300"
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFRTLG8N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}