import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'
import { NavLink } from 'react-router-dom'
import { Mq } from '../styles/settings/theme'
import { Toolbar, makeStyles, Drawer, IconButton } from '@material-ui/core'
import { XCircle, Menu } from 'react-feather'

import { Theme } from '../styles/settings/theme'
import { Container } from '../atoms/Container'
import { H5 } from '../atoms/Text'
import { DarkLogo } from '../atoms/Logo'

// TODO: Clean and brand all of this

const MobileNavWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;

  H5 {
    margin-bottom: 0px;
    transition: 0.2s ease-in-out;
    border-bottom: 2px solid ${(props) => props.theme.colors.white};

    &:hover {
      text-decoration: none;
      color: ${(props) => props.theme.colors.brandPrimary};
    }

    &:first-of-type {
      margin-left: 40px;
    }
  }

  a.navbar__link.navbar__link--active H5 {
    color: ${(props) => props.theme.colors.brandPrimary};
  }
`

const RightNav = styled(Box)`
  z-index: 1;

  H5 {
    margin-bottom: 0px;
    text-transform: capitalize;
    transition: 0.2s ease-in-out;
    border-bottom: 2px solid ${(props) => props.theme.colors.white};
    position: relative;

    &:hover {
      text-decoration: none;
      color: ${(props) => props.theme.colors.brandPrimary};
    }

    &:last-of-type {
      margin-right: 40px;
    }
  }

  a.navbar__link.navbar__link--active H5 {
    color: ${(props) => props.theme.colors.brandPrimary};
  }
`

const StyledDrawer = styled(Drawer)`
  flex-shrink: 0;
  padding-left: 1rem;
  width: 80%;

  H1 {
    font-size: 40px;
    margin: 1rem 0;
    min-width: 250px;
  }

  H5 {
    width: 100%;
    text-align: center;
    font-size: 24px;
    min-width: 250px;
    padding-bottom: 0.5rem;
  }
`

const DrawerHeader = styled(Box)`
  padding: 0;
  position: absolute;
  top: 0;
  z-index: 4;
  right: 0;
`

const StyledList = styled(Box)`
  padding: 0 1rem;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  svg {
    ${Mq.md} {
      display: none;
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0.75rem 0',
    border: '0px',
    top: '0',
    height: '3rem',

    '& .MuiDrawer-paper': {
      width: '100%',
    },
  },
  appBar: {
    backgroundColor: Theme.colors.darkGrey,
  },
  hide: {
    display: 'none',
  },
  closeIcon: {
    flex: 'auto',
    maxWidth: '56px',
    margin: '0px 8px auto auto',
    justifyContent: 'flex-end',
    width: 'max-content',
  },
  header: {
    width: '100%',
    border: '0px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    height: '3rem',
  },
}))

export function MobileNavigation(props) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [false])

  return (
    <Toolbar className={classes.root}>
      <Container>
        <MobileNavWrapper>
          <LeftNav>
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/"
            >
              <DarkLogo />
            </NavLink>
          </LeftNav>

          <RightNav>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="end"
              className={clsx(open && classes.hide)}
            >
              <Menu />
            </IconButton>

            <StyledDrawer variant="persistent" anchor="right" open={open}>
              <DrawerHeader className={clsx(open && classes.header)}>
                <IconButton
                  onClick={() => setOpen(false)}
                  className={clsx(classes.closeIcon)}
                >
                  <XCircle size={32} color="#000" />
                </IconButton>
              </DrawerHeader>
              <StyledList>
                <NavLink
                  exact
                  onClick={() => setOpen(false)}
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/get-started"
                >
                  <H5 light="true" className="cta">
                    Screening Kits
                  </H5>
                </NavLink>
                <NavLink
                  exact
                  onClick={() => setOpen(false)}
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/how-it-works"
                >
                  <H5 light="true">Take Action</H5>
                </NavLink>
              </StyledList>
            </StyledDrawer>
          </RightNav>
        </MobileNavWrapper>
      </Container>
    </Toolbar>
  )
}

export default MobileNavigation
