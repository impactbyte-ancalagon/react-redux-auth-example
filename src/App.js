import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import Axios from 'axios'

import Home from './pages/Home'
import UserList from './pages/UserList'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import { signInAction } from './store/actions/auth'

class App extends Component {
  async componentDidMount() {
    try {
      const token = Cookies.get('token')

      if (token) {
        const response = await Axios.get('http://localhost:8000/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.status !== 500) {
          this.props.signInAction()
        }
      }
    } catch (err) {}
  }

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
export default connect(
  null,
  { signInAction }
)(App)
