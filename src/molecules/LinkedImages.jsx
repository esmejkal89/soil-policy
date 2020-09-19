import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link, useHistory } from 'react-router-dom'
import { Box, Flex } from '@rebass/emotion'

import { Theme } from '../styles/settings'
import { Paragraph, H6 } from '../atoms/Text'
import Animation from '../atoms/Animation'
import { Container } from '../atoms/Container'
import SoilPolicy from '../assets/soil-policy-map.jpg'
import ScreeningKits from '../assets/film-screening-kits.jpg'

const ImageBox = styled(Link)`
  background: ${(props) => props.theme.colors.darkGrey};
  transition: ${(props) => props.theme.transition};
`

const ImageRow = styled(Box)`
  margin-top: -260px;
  background-size: cover;

  a {
    width: 100%;
    height: 100%;
  }
`

const Image = styled.div`
  background: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: url('${(props) => props.background}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 240px;
  box-shadow: none;
  transition: 0.2s ease-in-out;
`

const Description = styled(Box)`
  padding: 2rem;
  background: ${(props) => props.theme.colors.darkGrey};

  p {
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.weight.regular};
  }

  H6 {
    font-weight: ${(props) => props.theme.weight.bold};
    color: ${(props) => props.theme.colors.brandPrimary};
    transition: ${(props) => props.theme.transition};
    margin-bottom: 1rem;
  }
`

export function LinkedImages(props) {
  const history = useHistory()

  const [state, setState] = useState({
    hoverSoil: false,
    hoverScreening: false,
    redirect: false,
  })

  const motionVariants = {
    hidden: {
      opacity: 0,
      x: '-20px',
    },
    hiddenUp: {
      opacity: 0,
      y: '-20px',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  const showHoverSoil = () => {
    setState({ hoverSoil: true })
  }

  const showHoverScreening = () => {
    setState({ hoverScreening: true })
  }

  const removeHover = () => {
    setState({ hoverScreening: false, hoverSoil: false })
  }

  return (
    <Container>
      <ImageRow>
        <Flex width="auto" mx={-3}>
          <Box width={1} px={3}>
            <Animation
              initial="hidden"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 0 }}
            >
              <ImageBox
                onClick={() =>
                  window.open(
                    'https://nerdsforearth.com/state-healthy-soils-policy/',
                    '_blank',
                  )
                }
                onMouseEnter={showHoverSoil}
                onMouseLeave={removeHover}
              >
                <Image
                  background={SoilPolicy}
                  style={
                    state.hoverSoil
                      ? {
                          boxShadow:
                            'inset 0px -200px 300px -200px rgba(107, 214, 175, 1)',
                        }
                      : null
                  }
                />

                <Description>
                  <Animation
                    initial="hidden"
                    animate="visible"
                    variants={motionVariants}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.6,
                      delay: 0,
                    }}
                  >
                    <H6
                      style={
                        state.hoverSoil
                          ? {
                              color: Theme.colors.brandPrimaryLighten,
                            }
                          : null
                      }
                    >
                      State soil policy map
                    </H6>
                  </Animation>
                  <Animation
                    initial="hidden"
                    animate="visible"
                    variants={motionVariants}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.6,
                      delay: 0.2,
                    }}
                  >
                    <Paragraph>
                      Find out more about healthy soils policy and connect with
                      other grass root advocates.
                    </Paragraph>
                  </Animation>
                </Description>
              </ImageBox>
            </Animation>
          </Box>
          <Box width={1} px={3}>
            <Animation
              initial="hidden"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
            >
              <ImageBox
                onClick={() => history.push('/screening-kits')}
                onMouseEnter={showHoverScreening}
                onMouseLeave={removeHover}
              >
                <Image
                  background={ScreeningKits}
                  style={
                    state.hoverScreening
                      ? {
                          boxShadow:
                            'inset 0px -200px 300px -200px rgba(107, 214, 175, 1)',
                        }
                      : null
                  }
                />
                <Description>
                  <Animation
                    initial="hidden"
                    animate="visible"
                    variants={motionVariants}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.6,
                      delay: 0.2,
                    }}
                  >
                    <H6
                      style={
                        state.hoverScreening
                          ? {
                              color: Theme.colors.brandPrimaryLighten,
                            }
                          : null
                      }
                    >
                      Film Screening Kits
                    </H6>
                  </Animation>
                  <Animation
                    initial="hidden"
                    animate="visible"
                    variants={motionVariants}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.6,
                      delay: 0.4,
                    }}
                  >
                    <Paragraph>
                      Find out more about healthy soils policy and connect with
                      other grass root advocates.
                    </Paragraph>
                  </Animation>
                </Description>
              </ImageBox>
            </Animation>
          </Box>
        </Flex>
      </ImageRow>
    </Container>
  )
}
