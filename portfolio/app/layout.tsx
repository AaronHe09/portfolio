import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron He | Portfolio",
  description: "Aaron He's portfolio",
  icons: {
    icon: ["/favicon.ico?=v4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
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
          <Analytics />
        </main>
      </body>
    </html>
  );
}
