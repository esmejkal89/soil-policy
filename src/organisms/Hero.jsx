import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/emotion'
import { Play } from 'react-feather'

import VideoBackground from '../assets/hero__video.jpg'
import HeroImage from '../assets/hero__clovers.jpg'
import { Button } from '../atoms/Button'
import { H1, H5, Paragraph } from '../atoms/Text'
import { WideContainer, Container } from '../atoms/Container'

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
  padding-top: 5%;
  padding-bottom: 6%;
  z-index: 1;
`

const VideoSection = styled(Box)`
  background-image: url('${VideoBackground}');
  background-size: cover;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 2;
`

const RadialShadow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  H5 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.white};
    z-index: 2;
  }
`

const PlayButton = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: ${(props) => props.theme.colors.brandPrimary};
    box-shadow: 0px 0px 44px 36px rgba(0, 0, 0, 0.15);
  }

  svg {
    margin-left: 2px;
    fill: ${(props) => props.theme.colors.black};
    stroke: ${(props) => props.theme.colors.black};
  }
`

export function LargeHero(props) {
  return (
    <WideContainer>
      <LargeWrapper>
        <TextSection>
          <H1>A nation that builds its soil builds its future.</H1>
          <HomepageParagraph>
            Email your government representatives and encourage them to learn
            about the importance of improving soil health through regenerative
            agriculture!
          </HomepageParagraph>
          <Button title="Take Action" className="button" />
        </TextSection>
        <VideoSection>
          <RadialShadow>
            <H5>THE INITIATIVE</H5>
            <PlayButton>
              <Play />
            </PlayButton>
          </RadialShadow>
        </VideoSection>
      </LargeWrapper>
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
          <Button title={props.button} className="button" />
        </SmallWrapper>
      </Container>
    </WideContainer>
  )
}
