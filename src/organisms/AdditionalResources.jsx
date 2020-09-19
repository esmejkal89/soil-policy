import React from 'react'
import { Flex, Box } from '@rebass/emotion'

import { Paragraph, H3 } from '../atoms/Text'
import Animation from '../atoms/Animation'
import { Resource } from '../molecules/Resource'
import { WideContainer, Container } from '../atoms/Container'

export function AdditionalResources(props) {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: '-20px',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <WideContainer>
      <Container>
        <Flex flexWrap="wrap" py={4} mt={4}>
          <Box mb={4} maxWidth={600}>
            <Animation
              initial="hidden"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 0 }}
            >
              <H3>Additional Resources</H3>
            </Animation>
            <Animation
              initial="hidden"
              animate="visible"
              variants={motionVariants}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: 0 }}
            >
              <Paragraph>
                If you have something to add to the map or a resource to offer
                please email us at:{' '}
                <a href="mailto:colorado@healthysoilspolicy.org">
                  colorado@healthysoilspolicy.org
                </a>
              </Paragraph>
            </Animation>
          </Box>
          <Resource
            title="What is regenerative agriculture?"
            link="RegenerationInternational.com"
            url="https://regenerationinternational.org/"
          />
          <Resource
            title="Gather Film"
            link="Watch the Gather Film"
            url="https://gather.film/"
          />
          <Resource
            title="AgriBioSystems, Business Solutions"
            link="11 minute video"
            url="https://agribiosystems.com/"
          />
          <Resource
            title="The Three Sisters, Indigenous Farming"
            link="5 minute video"
            url="https://www.youtube.com/watch?v=hWURhP9sZpw#action=share"
          />
          <Resource
            title="Regreening the Desert"
            link="47 minute video"
            url="https://www.youtube.com/watch?v=IDgDWbQtlKI"
          />
          <Resource
            title="Hawaiian Indigenous Agriculture"
            link="56 minute video"
            url="https://www.youtube.com/watch?v=VXp1s-PYQcY"
          />
          <Resource
            title="Black Farmers in America"
            link="25 minute read"
            url="https://www.americanprogress.org/issues/economy/reports/2019/04/03/467892/progressive-governance-can-turn-tide-black-farmers/"
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
