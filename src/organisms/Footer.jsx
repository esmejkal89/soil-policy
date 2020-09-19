import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { lighten } from 'polished'
import { Box, Flex, Link as ExternalLink } from '@rebass/emotion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import FarmersFootprint from '../assets/ff.png'
import KissTheGround from '../assets/ktg.png'
import NerdsForEarth from '../assets/n4e.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Email from '../assets/email.png'
import Animation from '../atoms/Animation'
import { Container } from '../atoms/Container'
import { H3, H6 } from '../atoms/Text'

const FooterContainer = styled.main`
  background: ${(props) => props.theme.colors.darkGrey};
  padding: 4% 0;

  H3 {
    ${(props) => props.theme.weight.bold};
  }
  H6 {
    color: ${(props) => props.theme.colors.brandPrimary};
    text-align: left;
  }
`

const CopyrightContainer = styled.main`
  background: ${(props) => props.theme.colors.black};
  padding: 1% 0;

  H3,
  H6 {
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.weight.bold};
    transition: ${(props) => props.theme.transition};

    &:hover {
      color: ${(props) => props.theme.colors.brandPrimary};
    }
  }
  H6.header {
    font-family: ${(props) => props.theme.fonts.header};
    text-transform: none;
    letter-spacing: 1px;
    font-weight: ${(props) => props.theme.weight.regular};
    transition: 0.2s ease-in-out;
    color: ${(props) => props.theme.colors.white};

    & a {
      font-weight: ${(props) => props.theme.weight.regular};

      &:hover,
      &:active,
      &:focus {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
  H6.link {
    color: ${(props) => props.theme.colors.brandPrimary};
    margin: 1rem 0 1rem 2rem;
    transition: ${(props) => props.theme.transition};

    &:hover {
      color: ${(props) => lighten(0.2, props.theme.colors.brandPrimary)};
    }
  }
`

const Sponsors = styled(Box)`
  text-align: right;

  H3 {
    text-align: left;
  }

  H6 {
    margin: 3rem 0;
  }

  svg {
    margin-right: 1rem;
  }
`

const ThankYou = styled(Box)`
  svg {
    margin-right: 1rem;
  }
`

const Images = styled(Flex)`
  img {
    max-height: 90px;
    margin-right: 55px;
    width: auto;
  }
`

const SocialShare = styled(Box)`
  padding: 4rem;
  border: 2px solid ${(props) => props.theme.colors.brandPrimary};
  text-align: center;

  H6.center {
    margin: 3rem 0 5rem;
    text-align: center;
  }

  img {
    padding-bottom: 2rem;
  }
`

export function Footer(props) {
  const motionVariants = {
    hiddenLeft: {
      opacity: 0,
      x: '-20px',
    },
    hiddenRight: {
      opacity: 0,
      x: '20px',
    },
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <>
      <FooterContainer>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <ThankYou>
              <Animation
                initial="hiddenLeft"
                animate="visible"
                variants={motionVariants}
                transition={{ ease: 'easeInOut', duration: 0.6 }}
              >
                <H3 whiteText>
                  Thank you for speaking out for people and the planet!
                </H3>
              </Animation>
              <Sponsors>
                <Animation
                  initial="hiddenLeft"
                  animate="visible"
                  variants={motionVariants}
                  transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
                >
                  <H6>This initiative is brought to you by:</H6>
                </Animation>
                <Animation
                  initial="hiddenLeft"
                  animate="visible"
                  variants={motionVariants}
                  transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.4 }}
                >
                  <Images>
                    <ExternalLink
                      href="https://nerdsforearth.com/"
                      target="_blank"
                    >
                      <img src={NerdsForEarth} alt="nerds for earth" />
                    </ExternalLink>
                    <ExternalLink
                      href="https://kisstheground.com/"
                      target="_blank"
                    >
                      <img src={KissTheGround} alt="kiss the ground" />
                    </ExternalLink>
                    <ExternalLink
                      href="https://farmersfootprint.us/"
                      target="_blank"
                    >
                      <img src={FarmersFootprint} alt="farmers footprint" />
                    </ExternalLink>
                  </Images>
                </Animation>
              </Sponsors>
            </ThankYou>

            <Animation
              initial="hiddenRight"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.6 }}
            >
              <SocialShare>
                <Animation
                  initial="hiddenRight"
                  animate="visible"
                  variants={motionVariants}
                  transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.8 }}
                >
                  <H3 whiteText>How else can I help?</H3>
                </Animation>
                <Animation
                  initial="hiddenRight"
                  animate="visible"
                  variants={motionVariants}
                  transition={{ ease: 'easeInOut', duration: 0.6, delay: 1 }}
                >
                  <H6 className="center">Share on your socials</H6>
                </Animation>
                <Animation
                  initial="hiddenRight"
                  animate="visible"
                  variants={motionVariants}
                  transition={{ ease: 'easeInOut', duration: 0.6, delay: 1.2 }}
                >
                  <Flex justifyContent="space-between" maxWidth={260} mx="auto">
                    {/* TODO: Make these share on social */}
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={LinkedIn} alt="LinkedIn" />
                    <img src={Email} alt="Email" />
                  </Flex>
                </Animation>
              </SocialShare>
            </Animation>
          </Flex>
        </Container>
      </FooterContainer>
      <CopyrightContainer>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Animation
                initial="hiddenLeft"
                animate="visible"
                variants={motionVariants}
                transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.6 }}
              >
                <H6 className="header">
                  Copyright 2020 | All rights reserved –{' '}
                  <a href="mailto:collaborate@phoenixrisingresources.com">
                    Email Us
                  </a>
                </H6>
              </Animation>
            </Box>
            <Box>
              <Animation
                initial="hiddenRight"
                animate="visible"
                variants={motionVariants}
                transition={{ ease: 'easeInOut', duration: 0.6, delay: 1 }}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Link to="/screening-kits">
                    <H6>Articles & Resources</H6>
                  </Link>
                  {/* TODO: Add anchor link & scroll */}
                  <AnchorLink href="#take-action" offset={40}>
                    <H6 className="link">Take Action</H6>
                  </AnchorLink>
                </Flex>
              </Animation>
            </Box>
          </Flex>
        </Container>
      </CopyrightContainer>
    </>
  )
}
