import React from 'react'
import styled from '@emotion/styled'
import Background from '../assets/climate-change.jpg'

import { Paragraph, H2 } from '../atoms/Text'
import Animation from '../atoms/Animation'
import { WideContainer, Container } from '../atoms/Container'
import { LinkedImages } from '../molecules/LinkedImages'
import { AdditionalResources } from '../organisms/AdditionalResources'

const StyledSection = styled.main`
  padding-top: 11rem;
  padding-bottom: 4rem;
  text-align: center;
  background-image: linear-gradient(
      360deg,
      #ffffff 35.65%,
      rgba(255, 255, 255, 0.58) 70%,
      rgba(255, 255, 255, 0.56) 100%
    ),
    url('${Background}');
  background-size: cover;
  background-position-y: bottom;
  margin-bottom: 260px;

  H2 {
    padding-bottom: 4rem;
    max-width: 700px;
    margin: auto;
  }

  p {
    margin: 1.5rem;
    max-width: 900px;
    margin: auto;
    padding-bottom: 1rem;
  }
`

export function EducationSection(props) {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: '-20px',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <WideContainer>
      <StyledSection>
        <Container>
          <Animation
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0 }}
          >
            <H2>Climate change is something we can do something about</H2>
          </Animation>
          <Animation
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
          >
            <Paragraph>
              Scientists agree that regenerative agriculture can play a critical
              role in helping us reduce emissions and draw down atmospheric
              carbon.
            </Paragraph>
            <Paragraph>
              It will take a national effort to both reduce emissions and
              drawdown already dangerous levels of carbon in the atmosphere. We
              know it’s not going to happen overnight.
            </Paragraph>
            <Paragraph>
              But, it can happen. Letting policy makers know you care about this
              solution creates political will. And where there’s will, there’s a
              way!
            </Paragraph>
          </Animation>
        </Container>
      </StyledSection>
      <LinkedImages />

      <AdditionalResources />
    </WideContainer>
  )
}
