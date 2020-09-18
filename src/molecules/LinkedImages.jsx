import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Paragraph, H6 } from '../atoms/Text'
import { Container } from '../atoms/Container'

const ImageBox = styled(Box)`
  background: ${(props) => props.theme.colors.brandSecondary};
`

const Image = styled.div`
  background: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`

const Description = styled(Box)`
  padding: 2rem;

  H6 {
    font-weight: ${(props) => props.theme.weight.bold};
    margin-bottom: 1rem;
  }
`

export function LinkedImages(props) {
  return (
    <Container>
      <Flex width="auto" mx={-3}>
        <Box width={1} px={3}>
          <ImageBox>
            <Image>Image</Image>
            <Description>
              <H6>State soil policy map</H6>
              <Paragraph>
                Find out more about healthy soils policy and connect with other
                grass root advocates.
              </Paragraph>
            </Description>
          </ImageBox>
        </Box>
        <Box width={1} px={3}>
          <ImageBox>
            <Image>Image</Image>
            <Description>
              <H6>State soil policy map</H6>
              <Paragraph>
                Find out more about healthy soils policy and connect with other
                grass root advocates.
              </Paragraph>
            </Description>
          </ImageBox>
        </Box>
      </Flex>
    </Container>
  )
}
