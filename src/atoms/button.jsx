import React from 'react'
import styled from '@emotion/styled'
import { darken } from 'polished'
import { ArrowDown } from 'react-feather'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Theme } from '../styles/settings'

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
  height: 3rem;

  &:hover,
  &:focus,
  &:active {
    border: 3px solid ${(props) => darken(0.1, props.theme.colors.brandPrimary)};
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.brandPrimary)};
  }
`

const BaseAnchorButton = styled.button`
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
  height: 3rem;
  display: flex;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    border: 3px solid ${(props) => darken(0.1, props.theme.colors.brandPrimary)};
    background-color: ${(props) =>
      darken(0.1, props.theme.colors.brandPrimary)};
  }

  svg {
    margin-left: 2rem;
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

export function AnchorButton(props) {
  return (
    <AnchorLink href={props.url} offset={props.offset}>
      <BaseAnchorButton
        className={
          props.className ? props.className + ' brand-button' : 'brand-button'
        }
      >
        {props.title} <ArrowDown size={22} color={Theme.colors.black} />
      </BaseAnchorButton>
    </AnchorLink>
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
