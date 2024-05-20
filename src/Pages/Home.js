import React, { useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    document.head.appendChild(script);

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function() {
      window.googletag.defineSlot('/23060765973/Mobilke', [728, 90], 'div-gpt-ad-1716173349548-0').addService(window.googletag.pubads());
      window.googletag.enableServices();
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(function() {
        window.googletag.display('div-gpt-ad-1716173349548-0');
      });
    }
  }, []);

  return (
    <>
      <Hero />
      <div id="div-gpt-ad-1716173349548-0" style={{ textAlign: 'center', margin: '20px 0' }}>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1716173349548-0'); });
            `,
          }}
        />
      </div>
      <Welcome />
    </>
  );
}

export default Home;
