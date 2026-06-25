import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GasTraker | Monitor para tanque estacionario",
  description:
    "GasTraker te ayuda a monitorear el nivel de gas de tu tanque estacionario desde tu celular o con monitor físico.",
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