import React from 'react'
import AboutContent from '../Components/About/About'
import Adsense from './Adsense'

function About() {
  return (
    <div>
      <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
      <AboutContent />
    </div>
  )
}

export default About