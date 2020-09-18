import React from 'react'

import { WideContainer } from '../atoms/Container'
import { LargeHero } from '../organisms/Hero'
import { Signup } from '../organisms/Signup'
import { EducationSection } from '../organisms/EducationSection'

export function Homepage() {
  return (
    <main className="home-page">
      <WideContainer>
        <LargeHero />
        <Signup />
        <EducationSection />
      </WideContainer>
    </main>
  )
}

export default Homepage
