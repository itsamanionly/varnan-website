// components/TrackingScripts.tsx
'use client';

import { useEffect } from 'react';

export default function TrackingScripts() {
  useEffect(() => {
    // Google Analytics
    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-D74NB4RY4M';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagInit = document.createElement('script');
    gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D74NB4RY4M');
    `;
    document.head.appendChild(gtagInit);

    // Leadfeeder
    const leadfeederScript = document.createElement('script');
    leadfeederScript.innerHTML = `
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
    `;
    document.head.appendChild(leadfeederScript);
  }, []);

  return null;
}
