
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./../components/NavBar/NavBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";




export const metadata: Metadata = {
  title: "BOUNCER",
  description: "Ecommerce app for Tachnolgises ",
};

const inter = Inter({
  subsets: ["latin"], // Use 'latin' or other subsets as needed
  variable: "--font-inter", // Optional: CSS variable for custom styling
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <Header/>
        <div className="children min-h-screen py-6">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
