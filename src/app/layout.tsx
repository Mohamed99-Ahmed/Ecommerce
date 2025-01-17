import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Use 'latin' or other subsets as needed
  variable: '--font-inter', // Optional: CSS variable for custom styling
});

export const metadata: Metadata = {
  title: "BOUNCER",
  description: "Ecommerce app for Tachnolgises ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
