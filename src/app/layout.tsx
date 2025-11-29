import "../globals.css";
import Script from "next/script";

export const metadata = {
  title: "Catálogo Quincenazo Ultra Black Days",
  description: "Aprovecha hasta el 75% de descuento en mercadería seleccionada.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Script
              id="tag-manager-head"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K2FQQVQT');`,
              }}
            />
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
