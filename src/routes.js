import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Message from './pages/Message'

import { Navigation } from './organisms/Navigation'
import { Footer } from './organisms/Footer'

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/message-representatives">
            <Message />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  )
}

export default Routes
