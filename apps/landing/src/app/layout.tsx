"use client";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter, DM_Sans } from "next/font/google";
import { useEffect } from 'react';

//import { globalsCss } from "./globals.css"; // Import globals.css
import "../styles/styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],      // Regular & Medium
  variable: "--font-inter"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],      // Medium & Bold
  variable: "--font-dmsans"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function updateHeaderHeightVar() {
      const header = document.getElementById('site-header');
      if (header) {
        const height = header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    }

    updateHeaderHeightVar();
    window.addEventListener('resize', updateHeaderHeightVar);
    return () => window.removeEventListener('resize', updateHeaderHeightVar);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}