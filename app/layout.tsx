import type { Metadata } from "next";
import { Archivo, Chivo_Mono, Instrument_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "David Pears",
  description:
    "CTO at NaviSavi. Technology lead who still writes the front end — web storefront, iOS and Android.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
