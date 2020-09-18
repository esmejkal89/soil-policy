import React from 'react'

import { WideContainer } from '../atoms/Container'
import { SmallHero } from '../organisms/Hero'
import { EducationSection } from '../organisms/EducationSection'

export function ScreeningKits() {
  return (
    <main className="home-page">
      <WideContainer>
        <SmallHero
          title="Film Screening Kits"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa sem nulla ac est lorem. Leo sem sagittis pulvinar ."
          button="View the screening kits"
        />
        PAGE CONTENT
        <EducationSection />
      </WideContainer>
    </main>
  )
}

export default ScreeningKits
