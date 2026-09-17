import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FluidCursorBackground } from "@/components/effects/FluidCursorBackground";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Sauafth — Portfolio",
  description: "Portfolio of Abdullah Sauafth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
        <FluidCursorBackground />
      </body>
    </html>
  );
}
