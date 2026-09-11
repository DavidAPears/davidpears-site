import type { Metadata } from "next";
import { Archivo, Chivo_Mono, Instrument_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

// Archivo carries a width axis, which is what makes the display type expanded
// rather than merely large.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const DESCRIPTION =
  "David Pears is a hands-on engineering leader in Stockholm. Co-founder and CTO at NaviSavi, leading front-end and React Native development across four products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidpears.com"),
  title: {
    default: "David Pears · CTO and React Native developer, Stockholm",
    template: "%s · David Pears",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "David Pears · CTO and React Native developer, Stockholm",
    description: DESCRIPTION,
    url: "/",
    siteName: "David Pears",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Pears · CTO and React Native developer, Stockholm",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
