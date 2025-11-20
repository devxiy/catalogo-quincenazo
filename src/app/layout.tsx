import "../globals.css";

export const metadata = {
  title: "Catálogo Quincenazo",
  description: "Catálogo BlackDays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
