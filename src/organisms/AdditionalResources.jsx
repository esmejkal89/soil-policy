import React from 'react'
import { Flex, Box } from '@rebass/emotion'

import { Paragraph, H3 } from '../atoms/Text'
import { Resource } from '../molecules/Resource'
import { WideContainer, Container } from '../atoms/Container'

export function AdditionalResources(props) {
  return (
    <WideContainer>
      <Container>
        <Flex flexWrap="wrap" py={4}>
          <Box mb={4} maxWidth={600}>
            <H3>Additional Resources</H3>
            <Paragraph>
              If you have something to add to the map or a resource to offer
              please email us at:{' '}
              <a href="mailto:colorado@healthysoilspolicy.org">
                colorado@healthysoilspolicy.org
              </a>
            </Paragraph>
          </Box>
          <Resource
            title="What is regenerative agriculture?"
            link="RegenerationInternational.com"
            url="#"
          />
          <Resource
            title="Aribio Systems"
            link="Short video explaining soil science"
            url="#"
          />
          <Resource
            title="Good soil is the key to good agriculture"
            link="Wall Street Journal"
            url="#"
          />
          <Resource
            title="Can dirt save the earth?"
            link="New York Times"
            url="#"
          />
          <Resource
            title="Earth’s reapidly degrading soil is bad news for human health"
            link="Forbes"
            url="#"
          />
        </Flex>
      </Container>
    </WideContainer>
  )
}
