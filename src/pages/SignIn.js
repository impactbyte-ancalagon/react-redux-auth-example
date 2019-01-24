import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../store/actions/auth'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    this.props.signIn(this.state)
  }

  render() {
    const { email, password } = this.state
    const { isAuthenticated } = this.props

    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/users' }} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { signIn }
)(SignIn)
