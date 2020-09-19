import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'
import { Play } from 'react-feather'

import { Theme } from '../styles/settings'
import VideoBackground from '../assets/hero__video.jpg'
import Animation from '../atoms/Animation'
import { H5 } from '../atoms/Text'

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
  cursor: pointer;
`

const RadialShadow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  H5 {
    margin-bottom: 1rem;
    font-weight: ${(props) => props.theme.weight.bold};
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
  transition: ${(props) => props.theme.transitionSlow};
  cursor: pointer;
  z-index: -1;

  svg {
    margin-left: 2px;
    fill: ${(props) => props.theme.colors.black};
    stroke: ${(props) => props.theme.colors.black};
  }
`

export function HeroVideo() {
  const [state, setState] = useState({
    hover: false,
  })

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

  const showHover = () => {
    setState({ hover: true })
  }

  const removeHover = () => {
    setState({ hover: false, hoverSoil: false })
  }

  return (
    <VideoSection
      onClick={() =>
        window.open(
          'https://nerdsforearth.com/state-healthy-soils-policy/',
          '_blank',
        )
      }
      onMouseEnter={showHover}
      onMouseLeave={removeHover}
    >
      <RadialShadow>
        <Animation
          initial="hidden"
          animate="visible"
          variants={motionVariants}
          transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.8 }}
        >
          {/* TODO: Fix this z indexing on background hover */}
          <H5>The Initiative</H5>
        </Animation>
        <Animation
          initial="hidden"
          animate="visible"
          variants={motionVariants}
          transition={{ ease: 'easeInOut', duration: 0.6, delay: 1 }}
        >
          <PlayButton
            style={
              state.hover
                ? {
                    boxShadow: '0px 0px 61px 208px rgba(0, 0, 0, 0.15)',
                    background: Theme.colors.brandPrimary,
                    zIndex: 0,
                  }
                : null
            }
          >
            <Play />
          </PlayButton>
        </Animation>
      </RadialShadow>
    </VideoSection>
  )
}
