import React, { useEffect } from 'react';
import Hero from "../../src/Components/Hero/Hero";
import Welcome from '../Components/Welcome/Welcome';

function Home() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      google_ad_client = "ca-pub-7832822790443742";
      google_ad_slot = "Asdf1234";
      google_ad_width = 728;
      google_ad_height = 90;
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Hero />
      <div id="ad-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              google_ad_client = "ca-pub-7832822790443742";
              google_ad_slot = "Asdf1234";
              google_ad_width = 728;
              google_ad_height = 90;
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//pagead2.googlesyndication.com/pagead/show_ads.js"
        />
      </div>
      <Welcome />
    </>
  );
}

export default Home;
