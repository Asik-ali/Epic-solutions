import React, { useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    // Only add the ad script if the window width is greater than 768px
    if (window.innerWidth > 768) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `
        google_ad_client = "ca-pub-7832822790443742";
        google_ad_slot = "Asdf1234";
        google_ad_width = 728;
        google_ad_height = 90;
      `;
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = '//pagead2.googlesyndication.com/pagead/show_ads.js';

      document.body.appendChild(script1);
      document.body.appendChild(script2);
    }
  }, []);

  return (
    <>
      <Hero />
      <Welcome />
      {window.innerWidth > 768 && (
        <div className="w-full flex justify-center mt-4">
          <div id="ad-container" className="hidden md:block">
            {/* Ad placeholder */}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
