import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NFT's Market Place - Naseem Khan",
  description: "Market Place Where NFT's Sold & Hold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#160E2A] text-white ${inter.className}`}>
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
