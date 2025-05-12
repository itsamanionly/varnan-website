import type { Metadata } from "next";
import { Geist, Geist_Mono, Readex_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://varnan.tech'),
  title: "Varnan",
  description: "Varnan specializes in GTM strategies tailored for early-stage AI startups, ensuring your innovation reaches its full potential.",
  openGraph: {
    title: "Varnan",
    description: "Varnan specializes in GTM strategies tailored for early-stage AI startups, ensuring your innovation reaches its full potential.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: '/favicon.ico', 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" color-scheme="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${readex.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
