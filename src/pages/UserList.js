import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions/users'
import { Redirect } from 'react-router-dom'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, isAuthenticated } = this.props

    if (!isAuthenticated) {
      return <Redirect to={{ pathname: '/signin' }} />
    }
    return (
      <ul>{users && users.map((user, i) => <li key={i}>{user.name}</li>)}</ul>
    )
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  users: store.users
})

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList)
