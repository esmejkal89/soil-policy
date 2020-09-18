import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'

import { Button } from '../atoms/Button'
import { H1, Paragraph } from '../atoms/Text'
import { WideContainer, Container } from '../atoms/Container'

const SmallWrapper = styled(Box)`
  background-color: white;
`
const LargeWrapper = styled.main`
  margin-top: 5%;
  margin-bottom: 5%;

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
export function LargeHero(props) {
  return (
    <WideContainer>
      <Container>
        <LargeWrapper>
          <H1>A nation that builds its soil builds its future.</H1>
          <HomepageParagraph>
            Email your government representatives and encourage them to learn
            about the importance of improving soil health through regenerative
            agriculture!
          </HomepageParagraph>
          <Button title="Take Action" className="button" />
        </LargeWrapper>
      </Container>
    </WideContainer>
  )
}

export function SmallHero(props) {
  return (
    <WideContainer>
      <Container>
        <SmallWrapper>
          <H1>Email your representatives.</H1>
          <HomepageParagraph>
            Based on your location, there are representatives in your area that
            could benefit from learning more about the importance of our nations
            soils. Use the template below to send your message.
          </HomepageParagraph>
          <Button title="Customize your message" className="button" />
        </SmallWrapper>
      </Container>
    </WideContainer>
  )
}
