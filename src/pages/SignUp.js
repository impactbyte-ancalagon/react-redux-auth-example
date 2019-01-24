import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../store/actions/auth'

class SignUp extends Component {
  state = {
    name: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { name, age, email, password } = this.state

    this.props.signUp({ name, age, email, password })
  }

  render() {
    const { name, age, email, password, confirmPassword } = this.state
    const { isAuthenticated, isSignUpSuccess } = this.props

    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/users' }} />
    }

    if (isSignUpSuccess) {
      return <Redirect to={{ pathname: '/signin' }} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  isSignUpSuccess: store.auth.isSignUpSuccess
})

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp)
