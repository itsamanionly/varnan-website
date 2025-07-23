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

    // Leadfeeder
    // (function (ss, ex) {
    //   (window as any).ldfdr = (window as any).ldfdr || function () {
    //     ((window as any).ldfdr.q = (window as any).ldfdr.q || []).push([].slice.call(arguments));
    //   };
    //   (function (d, s) {
    //     const fs = d.getElementsByTagName(s)[0];
    //     function ce(src: string) {
    //       const cs = document.createElement(s) as HTMLScriptElement;
    //       cs.src = src;
    //       cs.async = true;
    //       fs.parentNode?.insertBefore(cs, fs);
    //     }
    //     ce('https://sc.lfeeder.com/lftracker_v1/' + ss + (ex ? '_' + ex : '') + '.js');
    //   })(document, 'script');
    // })('lYNOR8xxBxg8WQJZ');
  }, []);

  return null;
}
