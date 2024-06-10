import React from 'react';
import Hero from '../../src/Components/Hero/Hero';
import Welcome from '../Components/Welcome/Welcome';
import Adsense from './Adsense'; // Adjust the import path accordingly

function Home() {
  const isTabletView = () => {
    return window.innerWidth >= 768 && window.innerWidth < 1024; // Assuming tablet width range
  };

  const isLaptopView = () => {
    return window.innerWidth >= 1024; // Assuming laptop width range
  };
  const isMobileView = () => {
    return window.innerWidth < 768; // Assuming mobile width range
  };


  return (
    <>
      <Hero />
      <Welcome />
      <div className='flex justify-evenly flex-wrap'>
      {isMobileView() && (
          <>
            <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
            <Adsense client="ca-pub-7832822790443742" slot="6" width={336} height={280} />
          </>
        )}{isTabletView() && (
          <>
            <Adsense client="ca-pub-7832822790443742" slot="7" width={728} height={90} />
            <Adsense client="ca-pub-7832822790443742" slot="8" width={768} height={90} />
          </>
        )}
        {isLaptopView() && (
          <>
            <Adsense client="ca-pub-7832822790443742" slot="9" width={1024} height={90} />
            <Adsense client="ca-pub-7832822790443742" slot="10" width={1200} height={90} />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
