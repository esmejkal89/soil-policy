import React from 'react'
import styled from '@emotion/styled'

import { Paragraph, H2 } from '../atoms/Text'
import { WideContainer, Container } from '../atoms/Container'
import { LinkedImages } from '../molecules/LinkedImages'
import { AdditionalResources } from '../organisms/AdditionalResources'

const StyledSection = styled.main`
  padding-top: 10rem;
  padding-bottom: 6rem;
  text-align: center;
  max-width: 900px;
  margin: auto;

  H2 {
    margin-bottom: 4rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`

export function EducationSection(props) {
  return (
    <WideContainer>
      <StyledSection>
        <Container>
          <H2>Climate change is something we can do something about</H2>
          <Paragraph>
            Scientists agree that agriculture has a big role to play in both
            reducing emissions and drawing down and storing carbon in the soil.
          </Paragraph>
          <Paragraph>
            It will take a national effort to both reduce emissions and drawdown
            already dangerous levels of carbon in the atmosphere. We know it’s
            not going to happen overnight.
          </Paragraph>
          <Paragraph>
            But, it can happen. Letting policy makers know you care about this
            solution creates political will. And where there’s will, there’s a
            way!
          </Paragraph>
        </Container>
      </StyledSection>
      <LinkedImages />

      <AdditionalResources />
    </WideContainer>
  )
}
