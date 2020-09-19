import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/Container'
import { H3, H6 } from '../atoms/Text'

const NavigationContainer = styled(Flex)`
  background: ${(props) => props.theme.colors.darkGray};
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;

  H6 {
    color: ${(props) => props.theme.colors.brandPrimary};
    margin: 1rem 0;
  }
`

const Logo = styled(Box)`
  display: flex;
  align-items: center;
  H3 {
    color: ${(props) => props.theme.colors.white};
  }
  H6.small {
    margin-left: 2rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.white};
  }
`

const Links = styled(Box)`
  display: flex;
  align-items: center;
  H6 {
    margin-left: 2rem;
    color: ${(props) => props.theme.colors.white};
  }
  H6.link {
    color: ${(props) => props.theme.colors.brandPrimary};
    margin: 1rem 0 1rem 2rem;
  }
`

export function Navigation(props) {
  return (
    <>
      <NavigationContainer>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <Logo>
              <Link to="/">
                <H3>Logo</H3>
              </Link>

              <H6 className="small">Soil policy action</H6>
            </Logo>

            <Links>
              <Link to="/screening-kits">
                <H6>Screening Kits</H6>
              </Link>
              <Link to="/message-representatives">
                <H6 className="link">Take Action</H6>
              </Link>
            </Links>
          </Flex>
        </Container>
      </NavigationContainer>
    </>
  )
}
