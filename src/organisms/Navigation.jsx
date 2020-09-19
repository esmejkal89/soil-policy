import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  makeStyles,
  useScrollTrigger,
  Slide,
  Hidden,
} from '@material-ui/core'

import { DesktopNavigation } from '../molecules/DesktopNavigation'
import { MobileNavigation } from '../molecules/MobileNavigation'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#F3F6F9',
  },
}))

export function Navigation(props) {
  const classes = useStyles()
  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        className={props.color ? classes.appBar : null}
        color="inherit"
        elevation={0}
      >
        <Hidden smDown>
          <DesktopNavigation {...props} />
        </Hidden>
        <Hidden mdUp>
          <MobileNavigation {...props} />
        </Hidden>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navigation
