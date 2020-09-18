import React from 'react'

import { WideContainer } from '../atoms/Container'
import { SmallHero } from '../organisms/Hero'
import { Signup } from '../organisms/Signup'
import { EducationSection } from '../organisms/EducationSection'

export function Message() {
  return (
    <main className="home-page">
      <WideContainer>
        <SmallHero />
        <Signup />
        <EducationSection />
      </WideContainer>
    </main>
  )
}
