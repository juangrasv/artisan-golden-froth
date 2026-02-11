import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import PageTransition from "@/components/PageTransition/PageTransition";
import AgeVerification from "@/components/AgeVerification/AgeVerification";
import CartDrawer from "@/components/CartDrawer/CartDrawer";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artisan Golden Froth | Premium Brewing",
  description: "Experience the award-winning taste of perfection.",
};

import { CartProvider } from "@/context/CartContext";

// ... (keep imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} antialiased`}>
        <LanguageProvider>
          <CartProvider>
            <SmoothScroll>
              <AgeVerification />
              <CartDrawer />
              <Navigation />
              <PageTransition>
                {children}
              </PageTransition>
              <Footer />
            </SmoothScroll>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
