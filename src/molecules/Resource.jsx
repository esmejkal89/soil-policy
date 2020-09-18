import React from 'react'
import styled from '@emotion/styled'

import { H4 } from '../atoms/Text'
import { CornerRightUp } from 'react-feather'
import { Theme } from '../styles/settings'

const StyledSection = styled.main`
  width: 100%;
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.colors.brandSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  H4 {
    &.link {
      font-weight: ${(props) => props.theme.weight.bold};
      transition: ${(props) => props.theme.transition};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.brandPrimary};
      }
    }
  }

  p {
    margin-bottom: 1.5rem;
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
  return (
    <StyledSection>
      <H4>{props.title}</H4>
      <StyledLink>
        <H4 className="link">{props.link}</H4>
        <CornerRightUp size={22} color={Theme.colors.black} />
      </StyledLink>
    </StyledSection>
  )
}
