import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'
import { darken } from 'polished'

import { Container } from '../atoms/Container'
import { H3, H6 } from '../atoms/Text'

const FooterContainer = styled.main`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 4% 0 5%;

  H3,
  H6 {
    color: ${(props) => props.theme.colors.white};
  }

  H6 {
    color: ${(props) => props.theme.colors.brandPrimary};
    margin: 1rem 0;
  }
`

const CopyrightContainer = styled.main`
  background: ${(props) => props.theme.colors.black};
  padding: 1% 0;

  H3,
  H6 {
    color: ${(props) => props.theme.colors.white};
  }
  H6.header {
    font-family: ${(props) => props.theme.fonts.header};
    text-transform: none;
    letter-spacing: 1px;
    font-weight: ${(props) => props.theme.weight.regular};
    transition: 0.2s ease-in-out;

    & a {
      font-weight: ${(props) => props.theme.weight.regular};

      &:hover,
      &:active,
      &:focus {
        color: ${(props) => darken(0.1, props.theme.colors.brandSecondary)};
      }
    }
  }
  H6.link {
    color: ${(props) => props.theme.colors.brandPrimary};
    margin: 1rem 0 1rem 2rem;
  }
`

const Sponsors = styled(Box)`
  text-align: right;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`

const ThankYou = styled(Box)`
  svg {
    margin-right: 1rem;
  }
`
const SocialShare = styled(Box)`
  padding: 4rem;
  border: 2px solid ${(props) => props.theme.colors.brandPrimary};
  text-align: center;
`

export function Footer(props) {
  return (
    <>
      <FooterContainer>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <ThankYou>
              <H3>Thank you for speaking out for people and the planet!</H3>
              <Sponsors>
                <H6>This initiative is brought to you by:</H6>
              </Sponsors>
            </ThankYou>

            <SocialShare>
              <H3>How else can I help?</H3>
              <H6>Share on your socials</H6>
            </SocialShare>
          </Flex>
        </Container>
      </FooterContainer>
      <CopyrightContainer>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <H6 className="header">
                Copyright 2020 | All rights reserved –{' '}
                <a href="mailto:collaborate@phoenixrisingresources.com">
                  Email Us
                </a>
              </H6>
            </Box>
            <Box>
              <Flex justifyContent="space-between" alignItems="center">
                <H6>Articles & Resources</H6>
                <H6 className="link">Take Action</H6>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </CopyrightContainer>
    </>
  )
}
