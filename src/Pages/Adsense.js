// import React, { useEffect, useRef } from 'react';

// const Adsense = ({ client, slot, width, height }) => {
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

//   const isTabletView = () => {
//     return window.innerWidth >= 768 && window.innerWidth < 1024; // Assuming tablet width range
//   };

//   return (
//     <div>
//       <div ref={adRef}></div>
//       {isTabletView() && (
//         <div id='div-gpt-ad-1717607042978-0' style={{ minWidth: '728px', minHeight: '90px' }}>
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//                 googletag.cmd.push(function() { 
//                   googletag.display('div-gpt-ad-1717607042978-0'); 
//                 });
//               `,
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adsense;
import React, { useEffect, useRef, useState } from 'react';

const Adsense = ({ client, slot, width, height }) => {
  const adRef = useRef(null);
  const [isTablet, setIsTablet] = useState(false);

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
      script.defer = true;
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

  const isTabletView = () => {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(isTabletView());
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div ref={adRef}></div>
      {isTablet && (
        <div id='div-gpt-ad-1717607042978-0' style={{ minWidth: '728px', minHeight: '90px' }}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                googletag.cmd.push(function() { 
                  googletag.display('div-gpt-ad-1717607042978-0'); 
                });
              `,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Adsense;
