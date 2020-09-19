import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

import { Box, Flex } from '@rebass/emotion'
import { FormGroup } from '@material-ui/core'

import { FormField } from '../atoms/Input'
import { SubmitButton } from '../atoms/Button'

const FormWrapper = styled(FormGroup)`
  margin-top: 5rem;
`

const EmailFormField = styled(FormField)`
  width: 100%;
`

export function LeadCapture(props) {
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/screening-kits')
  }

  const isEnabled = name.length > 0 && email.length > 0 && zip.length > 0

  return (
    <FormWrapper onSubmit={(e) => handleSubmit(e)}>
      <Flex width="auto" mx={-2}>
        <Box width={1 / 3} px={2}>
          <FormField
            label="Full Name"
            placeholder="Please enter your full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </Box>
        <Box width={1 / 3} px={2}>
          <EmailFormField
            placeholder=" "
            label="Email"
            email={true}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </Box>
        <Box width={1 / 3} px={2}>
          <FormField
            label="Zip Code"
            placeholder=" "
            value={zip}
            onChange={(e) => {
              setZip(e.target.value)
            }}
          />
        </Box>
        <Box width="auto" px={2}>
          <SubmitButton
            title="submit"
            type="submit"
            onClick={(e) => {
              handleSubmit(e)
            }}
            className={!isEnabled && 'disabled'}
            disabled={!isEnabled}
          />
        </Box>
      </Flex>
    </FormWrapper>
  )
}
