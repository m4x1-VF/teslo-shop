import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo | SHOP",
  description: "Teslo is a modern e-commerce platform for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
