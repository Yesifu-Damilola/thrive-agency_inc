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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thrives-Agency",
  description: "Thrives-Agency - Your Partner in Growth",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Thrives-Agency",
    description: "Thrives-Agency - Your Partner in Growth",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/logo.png", // resolved as absolute from metadataBase
        width: 1200,
        height: 630,
        alt: "Thrives-Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrives-Agency",
    description: "Thrives-Agency - Your Partner in Growth",
    images: ["/images/logo.png"],
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
