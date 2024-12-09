import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio Aumo",
  description: "Website para desafio front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
