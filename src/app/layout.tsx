import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Mono } from "next/font/google";
import "../styles/globals.css";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"], // FIXME: not sure we need all
});

export const metadata: Metadata = {
  title: "Windsock - your tailwind UI library compass",
  description: "browse, filter and compare tailwind UI libraries · no opinions, just data",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dmMono.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
