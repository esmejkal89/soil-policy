import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { FormField } from '../atoms/Input'
import { Button } from '../atoms/Button'

const FormContainer = styled.div`
  margin-top: 5rem;
`

const EmailFormField = styled(FormField)`
  width: 100%;
`

const SubmitButton = styled(Button)``

export function LeadCapture(props) {
  return (
    <FormContainer>
      <Flex width="auto" mx={-2}>
        <Box width={1 / 3} px={2}>
          <FormField
            label="Full Name"
            placeholder="Please enter your full name"
          />
        </Box>
        <Box width={1 / 3} px={2}>
          <EmailFormField placeholder=" " label="Email" email={true} />
        </Box>
        <Box width={1 / 3} px={2}>
          <FormField label="Zip Code" placeholder=" " />
        </Box>
        <Box width="auto" px={2}>
          <SubmitButton title="submit" />
        </Box>
      </Flex>
    </FormContainer>
  )
}
