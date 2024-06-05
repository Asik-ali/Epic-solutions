import React from 'react';
import Hero from '../../src/Components/Hero/Hero';
import Welcome from '../Components/Welcome/Welcome';
import Adsense from './Adsense'; // Adjust the import path accordingly

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <div className='flex justify-evenly flex-wrap'>
        <Adsense client="ca-pub-7832822790443742" slot="5" />
        <Adsense client="ca-pub-7832822790443742" slot="6" />
      </div>
    </>
  );
}

export default Home;
