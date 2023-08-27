import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { VT323 } from "next/font/google";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden  bg-[#27333F] ${vt323.className}`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
