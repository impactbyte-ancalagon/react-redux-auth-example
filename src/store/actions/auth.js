import { SIGN_UP, SIGN_IN } from '../types'
import Axios from 'axios'
import Cookies from 'js-cookie'

export const signUp = data => dispatch => {
  Axios.post('http://localhost:8000/api/auth/signup', data)
    .then(res => {
      if (res === 'Success') {
        dispatch({ type: SIGN_UP })
      }
    })
    .catch(err => {
      console.error(err)
    })
}

export const signIn = data => dispatch => {
  Axios.post('http://localhost:8000/api/auth/signin', data)
    .then(({ data }) => {
      if (data.token) {
        Cookies.set('token', data.token, { expires: 7 })
        dispatch({ type: SIGN_IN })
      }
    })
    .catch(err => {
      console.error(err)
    })
}
