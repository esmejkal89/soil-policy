import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { lighten } from 'polished'
import { Box, Flex } from '@rebass/emotion'

import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Email from '../assets/email.png'
import { Container } from '../atoms/Container'
import { H3, H6 } from '../atoms/Text'

const NavigationContainer = styled(Flex)`
  background: ${(props) => props.theme.colors.darkGrey};
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
    font-weight: ${(props) => props.theme.weight.bold};
    color: ${(props) => props.theme.colors.white};
  }
`

const Links = styled(Box)`
  display: flex;
  align-items: center;
  H6 {
    margin-left: 2rem;
    font-weight: ${(props) => props.theme.weight.bold};
    color: ${(props) => props.theme.colors.white};
    transition: ${(props) => props.theme.transition};

    &:hover {
      color: ${(props) => props.theme.colors.brandPrimary};
    }
  }
  H6.link {
    color: ${(props) => props.theme.colors.brandPrimary};
    margin: 1rem 0 1rem 2rem;
    transition: ${(props) => props.theme.transition};

    &:hover {
      color: ${(props) => lighten(0.2, props.theme.colors.brandPrimary)};
    }
  }
`

const SocialIcons = styled(Flex)`
  padding-left: 1rem;

  img {
    padding-left: 1rem;
  }
`

export function DesktopNavigation(props) {
  return (
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
            <SocialIcons>
              {/* TODO: Make these share on social */}
              <img src={Facebook} alt="facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Instagram} alt="Instagram" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Email} alt="Email" />
            </SocialIcons>
          </Links>
        </Flex>
      </Container>
    </NavigationContainer>
  )
}
