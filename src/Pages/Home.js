import React, { useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
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

    loadGPTScript().then(() => {
      window.googletag = window.googletag || { cmd: [] };
      
      window.googletag.cmd.push(function() {
        // Define slots for laptop ads
        if(window.innerWidth > 768) {
          window.googletag.defineSlot('/23060765973/Laptop1', [728, 90], 'div-gpt-ad-laptop-1').addService(window.googletag.pubads());
          window.googletag.defineSlot('/23060765973/Laptop2', [728, 90], 'div-gpt-ad-laptop-2').addService(window.googletag.pubads());
        }
        // Define slots for mobile ads
        else {
          window.googletag.defineSlot('/23060765973/Mobile1', [320, 100], 'div-gpt-ad-mobile-1').addService(window.googletag.pubads());
          window.googletag.defineSlot('/23060765973/Mobile2', [320, 50], 'div-gpt-ad-mobile-2').addService(window.googletag.pubads());
        }
        
        window.googletag.enableServices();
      });

      window.googletag.cmd.push(function() {
        // Display laptop ads
        if(window.innerWidth > 768) {
          window.googletag.display('div-gpt-ad-laptop-1');
          window.googletag.display('div-gpt-ad-laptop-2');
        }
        // Display mobile ads
        else {
          window.googletag.display('div-gpt-ad-mobile-1');
          window.googletag.display('div-gpt-ad-mobile-2');
        }
      });

      // Load the adsbygoogle.js script for AdSense ads
      const adsbygoogleScript = document.createElement("script");
      adsbygoogleScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      adsbygoogleScript.async = true;
      document.head.appendChild(adsbygoogleScript);
    }).catch((error) => {
      console.error('Failed to load GPT script', error);
    });

    return () => {
      // Optionally clean up the script
    };
  }, []);

  return (
    <>
      <Hero />
      {/* Laptop ads */}
      {window.innerWidth > 768 && (
        <>
          <div id="div-gpt-ad-laptop-1" style={{ textAlign: 'center', margin: '20px 0' }}></div>
          <div id="div-gpt-ad-laptop-2" style={{ textAlign: 'center', margin: '20px 0' }}></div>
        </>
      )}
      {/* Mobile ads */}
      {window.innerWidth <= 768 && (
        <>
          <div id="div-gpt-ad-mobile-1" style={{ textAlign: 'center', margin: '20px 0' }}></div>
          <div id="div-gpt-ad-mobile-2" style={{ textAlign: 'center', margin: '20px 0' }}></div>
        </>
      )}
      <Welcome />
    </>
  );
}

export default Home;
