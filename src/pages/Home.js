import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import ReactFilestack from 'filestack-react'

class HomePage extends Component {
  state = {}

  handleSuccess = result => {
    const imageUrl = result.filesUploaded[0].url

    console.log(imageUrl)
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome!</h1>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <ReactFilestack
          apikey={process.env.REACT_APP_FILESTACK_API_KEY}
          buttonText="Click me"
          options={{
            accept: 'image/*',
            storeTo: {
              location: 's3'
            }
          }}
          onSuccess={this.handleSuccess}
        />
      </Fragment>
    )
  }
}

export default HomePage
