import { css } from '@emotion/core'
import { darken } from 'polished'

import { Theme } from '../settings'

export const Base = css`
  html {
    overflow: auto;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  body {
    font-family: ${Theme.fonts.brandFont};
    font-size: 1rem;
    font-weight: ${Theme.weight.regular};
    line-height: 1.5;
    color: ${Theme.colors.black};
    text-align: left;
    transition: ${Theme.transition};
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2 {
    font-family: ${Theme.fonts.header};
    font-weight: ${Theme.weight.bold};
  }

  h3,
  h4 {
    font-family: ${Theme.fonts.header};
    font-weight: ${Theme.weight.regular};
  }

  h5,
  h6 {
    font-family: ${Theme.fonts.brandFont};
    font-weight: ${Theme.weight.regular};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  a {
    color: ${Theme.colors.brandPrimary};
    text-decoration: none;
    font-weight: ${Theme.weight.bold};
    transition: ${Theme.transition};
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: ${(props) => darken(0.1, props.Theme.colors.brandSecondary)};
    }
  }
  ::selection {
    color: ${Theme.colors.white};
    background: ${Theme.colors.brandPrimary};
  }
`
