import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLACK DAYS - Catálogo AKÍ 2025",
  description: "¡Las mejores ofertas del año! Hasta 80% OFF en miles de productos. Aprovecha los BLACK DAYS de AKÍ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} font-sans antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
