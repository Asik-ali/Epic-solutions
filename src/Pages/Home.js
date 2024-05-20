import React, { useEffect, useState } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  const [isGPTLoaded, setIsGPTLoaded] = useState(false);

  useEffect(() => {
    if (!isGPTLoaded) {
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
        setIsGPTLoaded(true);
      }).catch((error) => {
        console.error('Failed to load GPT script', error);
      });
    }
  }, [isGPTLoaded]);

  useEffect(() => {
    if (isGPTLoaded) {
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(function() {
        const laptopSlot = window.googletag.defineSlot('/23060765973/Laptop', [728, 90], 'div-gpt-ad-laptop');
        const mobileSlot = window.googletag.defineSlot('/23060765973/Mobile', [320, 100], 'div-gpt-ad-mobile');

        // Add service to the defined slots
        laptopSlot.addService(window.googletag.pubads());
        mobileSlot.addService(window.googletag.pubads());

        window.googletag.enableServices();
      });
    }
  }, [isGPTLoaded]);

  useEffect(() => {
    if (isGPTLoaded) {
      window.googletag.cmd.push(function() {
        // Display the appropriate ad based on screen size
        const adSlot = window.innerWidth > 768 ? 'div-gpt-ad-laptop' : 'div-gpt-ad-mobile';
        window.googletag.display(adSlot);
      });
    }
  }, [isGPTLoaded]);

  return (
    <>
      <Hero />
      <div id="div-gpt-ad-laptop" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <div id="div-gpt-ad-mobile" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <Welcome />
    </>
  );
}

export default Home;
