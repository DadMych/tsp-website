import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "tfpdev — CTO as a Service",
  description:
    "CTO as a Service — fractional technical leadership, MVP development, bots & automation, payment systems, real estate tech. 8 years, 30+ projects, teams up to 18. Based in Europe, serving US & EU clients.",
  metadataBase: new URL("https://tfpdev.com"),
  openGraph: {
    title: "tfpdev — CTO as a Service",
    description:
      "Fractional CTO & full-stack development for startups and growing businesses. 8 years, 30+ projects shipped.",
    url: "https://tfpdev.com",
    siteName: "tfpdev",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "tfpdev — CTO as a Service",
    description:
      "Fractional CTO & full-stack development for startups and growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tfpdev.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Calendly popup widget CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-brutal-black antialiased">
        {children}

        {/* Calendly popup widget JS — loaded lazily */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        {/* Analytics placeholder — replace with Plausible or GA snippet */}
        {/* <Script src="https://plausible.io/js/script.js" data-domain="tfpdev.com" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
