import "./globals.css";

export const metadata = {
  title: "Coffee & Fruits",
  description:
    "Descubre Coffee & Fruits: .",
  keywords: [
    "café de especialidad",
    "frutas frescas",
    "tienda de café",
    "productos naturales",
    "Coffee & Fruits",
    "zipaquirá",
    "cafetería en Zipaquirá",
    "frutería en Zipaquirá",
    "heladería en Zipaquirá",
    "mejor café"
  ],
  authors: [{ name: "Coffee & Fruits", url: "https://coffee-and-fruits.vercel.app" }],
  openGraph: {
    title: "Coffee & Fruits",
    description:
      "Disfruta del sabor y la frescura en cada bocado! Visítanos hoy mismo o haz tu pedido en linea.",
    url: "https://coffee-and-fruits.vercel.app",
    siteName: "Coffee & Fruits",
    images: [
      {
        url: "https://coffee-and-fruits.vercel.app/logo.svg",
        width: 1200,
        height: 630,
        alt: "Coffee & Fruits",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee & Fruits",
    description:
      "Disfruta del sabor y la frescura en cada bocado! Visítanos hoy mismo o haz tu pedido en linea.",
  },
  alternates: {
    canonical: "https://coffee-and.fruits.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
};