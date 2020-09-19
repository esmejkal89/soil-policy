import React from 'react'
import styled from '@emotion/styled'
import { Box, Link as ExternalLink } from '@rebass/emotion'

import { H5 } from '../atoms/Text'
import Animation from '../atoms/Animation'
import { CornerRightUp } from 'react-feather'
import { Theme } from '../styles/settings'

const StyledSection = styled(Box)`
  width: 100%;
  padding: 1.5rem 3rem;
  background-color: ${(props) => props.theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  svg {
    transition: ${(props) => props.theme.transition};
  }
  H5.serif {
    font-family: ${(props) => props.theme.fonts.header};
    text-transform: none;
    letter-spacing: 1px;
  }
  H5 {
    transition: ${(props) => props.theme.transition};
    &.link {
      font-family: ${(props) => props.theme.fonts.header};
      font-weight: ${(props) => props.theme.weight.bold};
      letter-spacing: 0px;
      text-transform: none;
    }
  }
  p {
    margin-bottom: 1.5rem;
  }
  a {
    &:hover svg {
      stroke: ${(props) => props.theme.colors.brandPrimary};
    }

    &:hover H5 {
      &.link {
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.colors.brandPrimary};
        }
      }
    }
  }
`

const StyledLink = styled.main`
  display: flex;
  align-items: center;

  svg {
    margin-left: 1rem;
  }
`

export function Resource(props) {
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
    // TODO: Make the entire container trigger link animations
    <Animation
      initial="hidden"
      animate="visible"
      variants={motionVariants}
      transition={{ ease: 'easeInOut', duration: 0.6, delay: 0 }}
      style={{ width: '100%' }}
    >
      <StyledSection>
        <H5 className="serif">{props.title}</H5>
        <ExternalLink href={props.url} target="_blank">
          <StyledLink>
            <H5 className="link">{props.link}</H5>
            <CornerRightUp size={22} color={Theme.colors.black} />
          </StyledLink>
        </ExternalLink>
      </StyledSection>
    </Animation>
  )
}
