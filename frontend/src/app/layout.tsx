import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

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
      <body className={`${poppins.className}`}>
        <Header />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
