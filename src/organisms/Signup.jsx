import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import { CheckCircle } from 'react-feather'

import { Theme } from '../styles/settings/theme'
import Animation from '../atoms/Animation'
import { Container } from '../atoms/Container'
import { Paragraph, H4 } from '../atoms/Text'
import { LeadCapture } from '../molecules/LeadCapture'

const SignUpWrapper = styled.div`
  position: relative;
  width: 100%;
`

const SignUpContainer = styled.div`
  background: ${(props) => props.theme.colors.darkGrey};
  padding: 4% 0 5%;
  position: relative;

  p {
    max-width: 600px;
    padding-top: 1.5rem;
  }
`

const Diamond = styled.div`
  background: ${(props) => props.theme.colors.darkGrey};
  width: 3.5rem;
  height: 3.5rem;
  transform: rotate(45deg);
  position: absolute;
  top: -1.75rem;
  left: 11rem;

  @media screen and (min-width: 1600px) {
    display: none;
  }
`

const Alert = styled(Box)`
  text-align: right;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: -40px;

  p {
    padding-top: 2px;
  }

  svg {
    margin-right: 1rem;
  }
`

export function Signup(props) {
  const motionVariants = {
    hiddenLeft: {
      opacity: 0,
      x: '-2rem',
    },
    hiddenRight: {
      opacity: 0,
      x: '2rem',
    },
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  return (
    <SignUpWrapper>
      <Animation
        initial="invisible"
        animate="visible"
        variants={motionVariants}
        transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.6 }}
      >
        <Diamond />
      </Animation>
      <SignUpContainer>
        <Container>
          <Flex
            alignItems="center"
            position="relative"
            justifyContent="flex-end"
          >
            <Animation
              initial="hiddenRight"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 2 }}
            >
              <Alert>
                <CheckCircle size={22} color={Theme.colors.brandPrimary} />
                <Paragraph whiteText>
                  Email only used for future soil policy actions
                </Paragraph>
              </Alert>
            </Animation>
          </Flex>
          <Flex alignItems="center" position="relative">
            <Animation
              initial="hiddenLeft"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.6 }}
            >
              <H4 whiteText>
                Take new action to support healthy soil policies
              </H4>
              <Paragraph whiteText>
                Communicating with your policy makers builds political will, and
                where there's a will there's a way.
              </Paragraph>
            </Animation>
          </Flex>

          <Animation
            initial="invisible"
            animate="visible"
            variants={motionVariants}
            transition={{ ease: 'easeInOut', duration: 1.2, delay: 0.2 }}
          >
            <LeadCapture />
          </Animation>
        </Container>
      </SignUpContainer>
    </SignUpWrapper>
  )
}
