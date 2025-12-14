// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Readex_Pro, Merriweather } from "next/font/google";
import "./globals.css";
import Analytics from "@/lib/analytics";
import TrackingScripts from "@/components/trackingScripts";
import Script from "next/script";

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
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Medium uses bold weights too
  style: ["normal", "italic"], // Optional but improves aesthetics
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varnan.tech"),
  title: "Varnan",
  description:
    "Get a qualified pipeline with proven go-to marketing systems for AI startups with a 90-day money-back guarantee. ",
  openGraph: {
    title: "Varnan",
    description:
      "Get a qualified pipeline with proven go-to marketing systems for AI startups with a 90-day money-back guarantee. ",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" color-scheme="light" suppressHydrationWarning>
      <head>
        <Script
          id="leadfeeder"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(ss,ex){
        window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
        (function(d,s){
          var fs=d.getElementsByTagName(s)[0];
          function ce(src){
            var cs=d.createElement(s);
            cs.src=src;
            cs.async=1;
            fs.parentNode.insertBefore(cs,fs);
          };
          ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
        })(document,'script');
      })('lAxoEaKzo104OYGd');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${readex.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        <TrackingScripts />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
