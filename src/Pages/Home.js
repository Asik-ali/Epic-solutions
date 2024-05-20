import React, { useEffect, useState } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const loadGPTScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadGPTScript()
      .then(() => {
        window.googletag = window.googletag || { cmd: [] };

        if (!window.googletag.pubadsReady) {
          window.googletag.cmd.push(function() {
            window.googletag.pubads().enableSingleRequest();
            window.googletag.pubads().collapseEmptyDivs();
            window.googletag.enableServices();
          });
        }
      })
      .catch((error) => {
        console.error('Failed to load GPT script', error);
      });

    return () => {
      // Clean up
    };
  }, []);

  useEffect(() => {
    const reloadAds = () => {
      const existingAdSlots = document.querySelectorAll('[id^="div-gpt-ad-"]');
      existingAdSlots.forEach(slot => {
        slot.parentNode.removeChild(slot);
      });
    
      if (viewportWidth <= 768) { // Mobile view
        loadMobileAdScript();
      } else { // Laptop view
        loadDesktopAdScript();
      }
    };
    

    reloadAds();

    return () => {
      // Clean up
    };
  }, [viewportWidth]);

  const loadDesktopAdScript = () => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.className = "ad-script";
    script1.src = "//desktopad1.com/script.js";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.className = "ad-script";
    script2.src = "//desktopad2.com/script.js";
    document.head.appendChild(script2);
  };

  const loadMobileAdScript = () => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.className = "ad-script";
    script1.src = "//mobilead1.com/script.js";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.className = "ad-script";
    script2.src = "//mobilead2.com/script.js";
    document.head.appendChild(script2);
  };

  return (
    <>
      <Hero />
      <div id="div-gpt-ad-1716173349548-0" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <div id="div-gpt-ad-1716173349548-1" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <div id="mobile-ad-1" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <div id="mobile-ad-2" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <Welcome />
    </>
  );
}

export default Home;
