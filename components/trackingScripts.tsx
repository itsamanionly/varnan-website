// components/TrackingScripts.tsx
"use client";

import { useEffect } from "react";

export default function TrackingScripts() {
  useEffect(() => {
    // Google Analytics
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-D74NB4RY4M";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagInit = document.createElement("script");
    gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D74NB4RY4M');
    `;
    document.head.appendChild(gtagInit);

    (function (ss: string, ex?: string) {
      (window as any).ldfdr =
        (window as any).ldfdr ||
        function (...args: any[]) {
          ((window as any).ldfdr.q = (window as any).ldfdr.q || []).push(args);
        };

      (function (d: Document, s: string) {
        const fs = d.getElementsByTagName(s)[0];
        function ce(src: string) {
          const cs = d.createElement(s) as HTMLScriptElement;
          cs.src = src;
          cs.async = true;
          if (fs.parentNode) {
            fs.parentNode.insertBefore(cs, fs);
          }
        }

        ce(
          "https://sc.lfeeder.com/lftracker_v1" +
            ss +
            (ex ? "_" + ex : "") +
            ".js"
        );
      })(document, "script");
    })("lYNOR8xxBxg8WQJZ");
  }, []);

  return null;
}
