// import React, { useEffect, useRef } from 'react';

// const AdSense = ({ client, slot, width, height }) => {
//   const adRef = useRef(null);

//   useEffect(() => {
//     const loadAdSense = () => {
//       const ins = document.createElement('ins');
//       ins.className = 'adsbygoogle';
//       ins.style = `display:inline-block;width:${width}px;height:${height}px`;
//       ins.setAttribute('data-ad-client', client);
//       ins.setAttribute('data-ad-slot', slot);

//       if (adRef.current && !adRef.current.querySelector('.adsbygoogle')) {
//         adRef.current.appendChild(ins);
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       }
//     };

//     if (!window.adsbygoogle) {
//       const script = document.createElement('script');
//       script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
//       script.async = true;
//       script.onload = loadAdSense;

//       document.head.appendChild(script);
//     } else {
//       loadAdSense();
//     }

//     return () => {
//       if (adRef.current) {
//         adRef.current.innerHTML = '';
//       }
//     };
//   }, [client, slot, width, height]);

//   return <div ref={adRef}></div>;
// };

// export default AdSense;
import React, { useEffect, useRef } from 'react';

const AdSense = ({ client, slot, width, height }) => {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAdSense = () => {
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style = `display:inline-block;width:${width}px;height:${height}px`;
      ins.setAttribute('data-ad-client', client);
      ins.setAttribute('data-ad-slot', slot);

      if (adRef.current && !adRef.current.querySelector('.adsbygoogle')) {
        adRef.current.appendChild(ins);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    };

    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.onload = loadAdSense;

      document.head.appendChild(script);
    } else {
      loadAdSense();
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, [client, slot, width, height]);

  return <div ref={adRef}></div>;
};

export default AdSense;
