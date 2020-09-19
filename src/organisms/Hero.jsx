import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/emotion'

import HeroImage from '../assets/hero__clovers.jpg'
import Animation from '../atoms/Animation'
import { AnchorButton } from '../atoms/Button'
import { H1, Paragraph } from '../atoms/Text'
import { WideContainer, Container } from '../atoms/Container'
import { HeroVideo } from '../molecules/HeroVideo'

const SmallWrapper = styled(Box)`
  background-color: white;

  H1 {
    margin-bottom: 1rem;
  }
`
const LargeWrapper = styled(Flex)`
  position: relative;
  background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.83) 100%
    ),
    url('${HeroImage}');
  background-size: 60%;
  .button {
    margin-right: 1rem;
  }

  H1 {
    max-width: 740px;
    margin-bottom: 1rem;
  }
`

const HomepageParagraph = styled(Paragraph)`
  max-width: 640px;
  margin-bottom: 3rem;
`

const TextSection = styled(Box)`
  max-width: 1600px;
  width: 100%;
  margin: auto;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 12%;
  padding-bottom: 8%;
  z-index: 1;
`

export function LargeHero(props) {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: '-20px',
    },
    visible: {
      opacity: 1,
      y: '0px',
    },
  }

  return (
    <WideContainer>
      <LargeWrapper>
        {/* TODO: Make entire column trigger video, and hover animation for button */}
        <TextSection>
          <Animation
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0 }}
          >
            <H1>A nation that builds its soil builds its future.</H1>
          </Animation>
          <Animation
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
          >
            <HomepageParagraph>
              Email your government representatives and encourage them to learn
              about the importance of improving soil health through regenerative
              agriculture!
            </HomepageParagraph>
          </Animation>
          <Animation
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.4 }}
          >
            <AnchorButton
              title="Take Action"
              className="button"
              url="#take-action"
              offset={40}
            />
          </Animation>
        </TextSection>
        <HeroVideo />
      </LargeWrapper>

      <section id="take-action"></section>
    </WideContainer>
  )
}

export function SmallHero(props) {
  return (
    <WideContainer>
      <Container>
        <SmallWrapper>
          <H1>{props.title}</H1>
          <HomepageParagraph>{props.subTitle}</HomepageParagraph>
          <AnchorButton
            title={props.button}
            className="button"
            url="#continue"
            offset={40}
          />
        </SmallWrapper>
      </Container>
    </WideContainer>
  )
}
