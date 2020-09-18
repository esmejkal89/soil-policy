import React from 'react'
import styled from '@emotion/styled'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import { Box } from '@rebass/emotion'

import { Theme } from '../styles/settings'
import { H5 } from './Text'

const BasicTextField = withStyles({
  root: {
    background: Theme.colors.white,
    height: '3.5rem',
    padding: '0 2rem',
    fontFamily: Theme.fonts.brandFont,
    width: '100%',
    fontSize: '1rem',
    borderBottom: '4px solid',
    borderBottomColor: Theme.colors.brandPrimary,
  },
})(InputBase)

const CustomTextField = styled(Box)`
  position: relative;
`

const Title = styled(H5)`
  text-transform: uppercase;
  position: absolute;
  top: -2.5rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.weight.semiBold};
  letter-spacing: ${(props) => props.theme.letterSpacing.semiBold};
`

export function FormField(props) {
  return (
    <CustomTextField>
      <Title>{props.label}</Title>
      <BasicTextField
        id="custom-css-standard-TextField"
        placeholder={props.placeholder || props.label}
        label="Custom CSS"
      />
    </CustomTextField>
  )
}
