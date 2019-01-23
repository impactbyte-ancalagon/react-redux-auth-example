import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import UserList from './pages/UserList'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={UserList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Fragment>
    )
  }
}
export default App
