import Navbar from "./_components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unit testing",
  description: "Generated by create next app",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />

      <body className={`${inter.className} bg-zinc-900 mt-32 px-96 mb-5`}>
        {children}
      </body>
    </html>
  );
}
