import React, { useState, useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 767);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWideScreen) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `
        window.google_ad_client = "ca-pub-7832822790443742";
        window.google_ad_slot = "Asdf1234";
        window.google_ad_width = 728;
        window.google_ad_height = 90;
      `;

      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = '//pagead2.googlesyndication.com/pagead/show_ads.js';

      document.body.appendChild(script1);
      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }
  }, [isWideScreen]);

  return (
    <>
      <Hero />
      <div className="w-full md:w-auto">
        <Welcome />
      </div>
      {isWideScreen && (
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
