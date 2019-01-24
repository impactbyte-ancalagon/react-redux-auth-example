import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions/users'
import { signOut } from '../store/actions/auth'
import { Redirect } from 'react-router-dom'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, isAuthenticated, signOut } = this.props

    if (!isAuthenticated) {
      return <Redirect to={{ pathname: '/signin' }} />
    }
    return (
      <Fragment>
        <ul>{users && users.map((user, i) => <li key={i}>{user.name}</li>)}</ul>
        <button onClick={signOut}>Sign Out</button>
      </Fragment>
    )
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  users: store.users
})

export default connect(
  mapStateToProps,
  { fetchUsers, signOut }
)(UserList)
