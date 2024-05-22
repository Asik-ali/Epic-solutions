import React, { useEffect } from 'react';
import Hero from '../../src/Components/Hero/Hero';
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    const scriptContent = document.createElement('script');
    scriptContent.type = 'text/javascript';
    scriptContent.text = `
      google_ad_client = "ca-pub-7832822790443742";
      google_ad_slot = "3";
      google_ad_width = 300;
      google_ad_height = 250;
    `;
    document.body.appendChild(scriptContent);

    const scriptSrc = document.createElement('script');
    scriptSrc.type = 'text/javascript';
    scriptSrc.src = '//pagead2.googlesyndication.com/pagead/show_ads.js';
    scriptSrc.async = true;
    document.body.appendChild(scriptSrc);

    return () => {
      document.body.removeChild(scriptContent);
      document.body.removeChild(scriptSrc);
    };
  }, []);

  return (
    <>
      <Hero />
      <Welcome />
    </>
  );
}

export default Home;
