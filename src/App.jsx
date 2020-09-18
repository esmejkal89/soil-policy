import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from './styles/settings/theme'
import { GlobalStyles } from './styles/global'
import { Footer } from './organisms/Footer'
import { Navigation } from './organisms/Navigation'
import { Homepage } from './pages/Homepage'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Navigation />
        <Global styles={GlobalStyles} />
        <Homepage />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default App
