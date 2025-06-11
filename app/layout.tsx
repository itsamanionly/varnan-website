import type { Metadata } from "next";
import { Geist, Geist_Mono, Readex_Pro, Merriweather } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Analytics from "@/lib/analytics";

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
    "Varnan specializes in GTM strategies tailored for early-stage AI startups, ensuring your innovation reaches its full potential.",
  openGraph: {
    title: "Varnan",
    description:
      "Varnan specializes in GTM strategies tailored for early-stage AI startups, ensuring your innovation reaches its full potential.",
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
      <body
        className={`${geistSans.variable} ${readex.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D74NB4RY4M"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D74NB4RY4M', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="leadfeeder"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
      (function(ss,ex){
        window.ldfdr = window.ldfdr || function(){
          (ldfdr.q = ldfdr._q || []).push([].slice.call(arguments));
        };
        (function(d,s){
          var fs = d.getElementsByTagName(s)[0];
          function ce(src){
            var cs = d.createElement(s);
            cs.src = src;
            cs.async = 1;
            fs.parentNode.insertBefore(cs, fs);
          };
          ce('https://sc.lfeeder.com/lftracker_v1' + ss + (ex ? '_' + ex : '') + '.js');
        })(document,'script');
      })('lYNOR8xxBxg8WQJZ');
    `,
          }}
        />

        <Analytics /> */}
        {children}
      </body>
    </html>
  );
}
