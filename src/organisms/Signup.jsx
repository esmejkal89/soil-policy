import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import { CheckCircle } from 'react-feather'

import { Theme } from '../styles/settings/theme'
import { Container } from '../atoms/Container'
import { Paragraph, H3 } from '../atoms/Text'
import { LeadCapture } from '../molecules/LeadCapture'

const SignUpContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 4% 0 5%;
`

const Alert = styled(Box)`
  text-align: right;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`

export function Signup(props) {
  return (
    <SignUpContainer>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <H3 whiteText>Take new action to support healthy soil policies</H3>
          <Alert>
            <CheckCircle size={22} color={Theme.colors.brandPrimary} />
            <Paragraph whiteText>
              Email only used for future soil policy actions
            </Paragraph>
          </Alert>
        </Flex>

        <LeadCapture />
      </Container>
    </SignUpContainer>
  )
}
