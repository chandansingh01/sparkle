import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header";
const poppins = Poppins({ weight: "400", preload: false, });

export const metadata: Metadata = {
  title: "Sparkle Agency Portfolio",
  description: "Explore the Sparkle Agency Portfolio, showcasing our creative projects in strategy, branding, design, and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className+ 'scroll-smooth'}>
        <main className="">
          <div className="p-16">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}