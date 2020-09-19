import React from 'react'
import MetaTags from 'react-meta-tags'

import metaImage from '../assets/meta-image.jpg'

import { WideContainer } from '../atoms/Container'
import { LargeHero } from '../organisms/Hero'
import { Signup } from '../organisms/Signup'
import { EducationSection } from '../organisms/EducationSection'

export function Homepage() {
  return (
    <main className="atomic-page">
      <MetaTags>
        <title>
          Soil Policy Action – Email your government representatives and
          encourage them to learn about the importance of improving soil health
          through regenerative agriculture!
        </title>
        <meta
          name="description"
          content="Soil Policy Action - Email your government representatives and encourage them to learn about the importance of improving soil health through regenerative agriculture!"
        />
        <meta
          property="og:title"
          content="Soil Policy Action - Email your government representatives and encourage them to learn about the importance of improving soil health through regenerative agriculture!"
        />
        <meta property="og:image" content={metaImage} />
      </MetaTags>
      <WideContainer>
        <LargeHero />
        <Signup />
        <EducationSection />
      </WideContainer>
    </main>
  )
}

export default Homepage
