import React from 'react'
import styled from '@emotion/styled'
import { lighten, darken } from 'polished'

const BaseButton = styled.button`
  padding: 0 2rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.brandPrimary};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 2px;
  font-weight: ${(props) => props.theme.weight.semiBold};
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  text-transform: uppercase;
  border: 3px solid ${(props) => props.theme.colors.brandPrimary};
  height: 3.5rem;

  &:hover,
  &:focus,
  &:active {
    border: 3px solid
      ${(props) => lighten(0.1, props.theme.colors.brandPrimary)};
    background-color: ${(props) =>
      lighten(0.1, props.theme.colors.brandPrimary)};
  }
`

const BaseAccentButton = styled(BaseButton)`
  background-color: initial;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  border: 3px solid ${(props) => props.theme.colors.brandPrimary};

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => darken(0.1, props.theme.colors.brandPrimary)};
    background-color: transparent;
    border-color: ${(props) => darken(0.1, props.theme.colors.brandPrimary)};
  }
`

export function Button(props) {
  return (
    <BaseButton
      className={
        props.className ? props.className + ' brand-button' : 'brand-button'
      }
    >
      {props.title}
    </BaseButton>
  )
}

export function AccentButton(props) {
  return (
    <BaseAccentButton
      className="brand-button brand-button--accent"
      variant="secondary"
    >
      {props.title}
    </BaseAccentButton>
  )
}
