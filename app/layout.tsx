import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GasTraker | Monitor Inteligente para Tanques de Gas LP",
  description:
    "Monitorea el nivel de gas LP de tu tanque estacionario desde tu celular. Consulta litros, porcentaje, historial de consumo y recibe alertas con GasTraker.",
  keywords: [
    "GasTraker",
    "Gas Tracker",
    "Gas Traker",
    "monitor de gas",
    "monitor tanque estacionario",
    "sensor tanque estacionario",
    "gas LP",
    "tanque estacionario",
    "medidor de gas",
    "nivel de gas",
    "litros de gas",
    "porcentaje de gas",
  ],
  openGraph: {
    title: "GasTraker | Monitor Inteligente para Tanques de Gas LP",
    description:
      "Consulta el nivel de gas de tu tanque estacionario desde tu celular o con monitor físico.",
    url: "https://gastraker-web.vercel.app/",
    siteName: "GasTraker",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}