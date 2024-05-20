import React, { useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    // Function to load the GPT script asynchronously
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

    // Load the GPT script and define/display desktop ads
    loadGPTScript().then(() => {
      window.googletag = window.googletag || { cmd: [] };

      // Define ad slots for desktop
      window.googletag.cmd.push(function() {
        window.googletag.defineSlot('/23060765973/Mobilke1', [728, 90], 'div-gpt-ad-1716173349548-0').addService(window.googletag.pubads());
        window.googletag.defineSlot('/23060765973/Mobilke2', [728, 90], 'div-gpt-ad-1716173349548-1').addService(window.googletag.pubads());
        window.googletag.enableServices();
      });

      // Display the defined ad slots for desktop
      window.googletag.cmd.push(function() {
        window.googletag.display('div-gpt-ad-1716173349548-0');
        window.googletag.display('div-gpt-ad-1716173349548-1');
      });
    }).catch((error) => {
      console.error('Failed to load GPT script', error);
    });

    // Function to load the mobile ad script if the device is mobile
    const loadMobileAdScript = () => {
      if (window.innerWidth <= 768) { // Check if the screen width is less than or equal to 768px (mobile device)
        // Create and append the mobile ad configuration script
        const mobileAdScript = document.createElement("script");
        mobileAdScript.type = "text/javascript";
        mobileAdScript.innerHTML = `
          google_ad_client = "ca-pub-7832822790443742";
          google_ad_slot = "2";
          google_ad_width = 320;
          google_ad_height = 100;
        `;
        document.head.appendChild(mobileAdScript);

        // Create and append the script to load and display the mobile ad
        const mobileAdScriptSrc = document.createElement("script");
        mobileAdScriptSrc.type = "text/javascript";
        mobileAdScriptSrc.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
        document.head.appendChild(mobileAdScriptSrc);
      }
    };

    // Call the function to load the mobile ad script if applicable
    loadMobileAdScript();

    return () => {
      // Optionally clean up the scripts when the component unmounts
    };
  }, []);

  return (
    <>
      <Hero />
      {/* Desktop Ad Slot 1 */}
      <div id="div-gpt-ad-1716173349548-0" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      {/* Desktop Ad Slot 2 */}
      <div id="div-gpt-ad-1716173349548-1" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      {/* Mobile Ad Slot */}
      <div id="mobile-ad" style={{ textAlign: 'center', margin: '20px 0' }}></div>
      <Welcome />
    </>
  );
}

export default Home;
