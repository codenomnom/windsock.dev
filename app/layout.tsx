import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
});

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "windsock",
  description: "browse, explore and compare tailwind resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
