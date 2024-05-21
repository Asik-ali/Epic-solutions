import React, { useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    const scriptId = 'gpt-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.googletagservices.com/tag/js/gpt.js';
      script.async = true;
      script.onload = () => {
        window.googletag = window.googletag || { cmd: [] };
        window.googletag.cmd.push(() => {
          window.googletag.defineSlot('/1716303289857/home', [300, 250], 'div-gpt-ad-1716303289857-0').addService(window.googletag.pubads());
          window.googletag.enableServices();
          window.googletag.display('div-gpt-ad-1716303289857-0');
        });
      };
      document.body.appendChild(script);
    } else {
      window.googletag.cmd.push(() => {
        window.googletag.display('div-gpt-ad-1716303289857-0');
      });
    }
  }, []);

  return (
    <>
      <Hero />
      <div id='div-gpt-ad-1716303289857-0' style={{ minWidth: '300px', minHeight: '250px' }}></div>
      <Welcome />
    </>
  );
}

export default Home;
