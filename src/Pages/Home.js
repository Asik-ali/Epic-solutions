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
        // Define slot for laptop ad
        window.googletag.defineSlot('/23060765973/Laptop', [728, 90], 'div-gpt-ad-laptop').addService(window.googletag.pubads());
        
        // Define slot for mobile ad
        window.googletag.defineSlot('/23060765973/Mobile', [320, 100], 'div-gpt-ad-mobile').addService(window.googletag.pubads());
        
        window.googletag.enableServices();
      });

      window.googletag.cmd.push(function() {
        // Display laptop ad if screen size is greater than 768 pixels
        if(window.innerWidth > 768) {
          window.googletag.display('div-gpt-ad-laptop');
        } else { // Display mobile ad if screen size is less than or equal to 768 pixels
          window.googletag.display('div-gpt-ad-mobile');
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
      Ad
      <div id="div-gpt-ad-laptop" style={{ textAlign: 'center', margin: '20px 0' }}></div>
     
      <div id="div-gpt-ad-mobile" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <Welcome />
    </>
  );
}

export default Home;
