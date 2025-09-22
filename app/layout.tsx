import type { Metadata } from "next";
import { Geist, Geist_Mono, Oregano, Parisienne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oregano = Oregano({
  variable: "--font-oregano",
  subsets: ["latin"],
  weight: "400",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dave's Delicious Desserts | Custom Cakes & Pastries | Pleasantville",
  description:
    "Custom cakes, cupcakes, and pastries for birthdays, weddings, and all events in Pleasantville. Made from scratch with local ingredients by Dave.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oregano.variable} ${parisienne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
