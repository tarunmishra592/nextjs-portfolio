import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Stars from "@/components/Stars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Az Bytes",
  description: "Next.js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden bg-[#000]`}
      >
        <Stars/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
