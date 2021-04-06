import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import Search from './pages/Search'
import {Provider} from 'react-redux'

import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Details} path="/detail/:id" />
            <Route component={Search} path="/search" />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
