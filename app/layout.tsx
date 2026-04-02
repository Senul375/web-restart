import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SNC — Revenue Infrastructure",
  description:
    "We design and implement intelligent revenue systems that eliminate manual work, accelerate response times, and ensure no opportunity is missed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0A0A0C] text-[#F5F5F7] antialiased">{children}</body>
    </html>
  );
}
