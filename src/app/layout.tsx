"use client";

import type { metadata } from "./metadata";

import { Geist, Geist_Mono } from "next/font/google";

// gpt XD
import Layout from "@/components/layout/layout";

// base
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
