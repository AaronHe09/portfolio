import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["600", "400"], subsets: ["latin"] });

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
      <body className={`overflow-x-hidden  bg-[#27333F] ${poppins.className}`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
