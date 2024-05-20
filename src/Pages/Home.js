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
        window.googletag.defineSlot('/23060765973/Mobilke1', [728, 90], 'div-gpt-ad-1716173349548-0').addService(window.googletag.pubads());
        window.googletag.defineSlot('/23060765973/Mobilke2', [728, 90], 'div-gpt-ad-1716173349548-1').addService(window.googletag.pubads());
        window.googletag.enableServices();
      });

      window.googletag.cmd.push(function() {
        window.googletag.display('div-gpt-ad-1716173349548-0');
        window.googletag.display('div-gpt-ad-1716173349548-1');
      });

      // Add the additional AdSense script here
      const adsScript = document.createElement("script");
      adsScript.type = "text/javascript";
      adsScript.innerHTML = `
        google_ad_client = "ca-pub-7832822790443742";
        google_ad_slot = "2";
        google_ad_width = 320;
        google_ad_height = 50;
      `;
      document.head.appendChild(adsScript);

      const adsShowScript = document.createElement("script");
      adsShowScript.type = "text/javascript";
      adsShowScript.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
      document.head.appendChild(adsShowScript);
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
      <div id="div-gpt-ad-1716173349548-0" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <div id="div-gpt-ad-1716173349548-1" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <Welcome />
    </>
  );
}

export default Home;
