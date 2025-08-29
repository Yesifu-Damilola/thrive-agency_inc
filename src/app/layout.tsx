import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { QueryProvider } from "./providers";
import { CartProvider } from "@/components/context/CartContext";
import CartSidebar from "@/features/cart/CartSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thrive-Agency",
  description: "Thrive-Agency - Your Partner in Growth",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Thrive-Agency",
    description: "Thrive-Agency - Your Partner in Growth",
    type: "website",
    url: "https://thrive-agency.com",
    images: [
      {
        url: "/images/thrivelogo.png",
        width: 1200,
        height: 630,
        alt: "Thrive-Agency Logo",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <QueryProvider>
            <Navbar />
            <CartSidebar />
            <main>{children}</main>
            <Footer />
          </QueryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
