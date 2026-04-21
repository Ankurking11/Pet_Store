import type { Metadata } from "next";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://petsbayandco.com"),
  title: {
    default: "Best Pet Store in Balewadi Pune | Pet’s Bay & Co",
    template: "%s | Pet’s Bay & Co",
  },
  description:
    "Premium food, toys, and pet care essentials in Balewadi, Pune. Shop quality brands with quick WhatsApp ordering.",
  keywords: [
    "pet store balewadi",
    "pet shop pune",
    "dog food balewadi",
    "cat food pune",
    "pet accessories pune",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white">
      <body className="min-h-full bg-white text-gray-900 antialiased">
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  );
}
