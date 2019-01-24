import { SET_SIGN_UP_STATUS, SIGN_IN, SIGN_OUT } from '../types'
import Axios from 'axios'
import Cookies from 'js-cookie'

export const signUp = data => dispatch => {
  Axios.post('http://localhost:8000/api/auth/signup', data)
    .then(({ data }) => {
      if (data === 'Success') {
        dispatch(setSignUpStatus(true))
      }
    })
    .catch(err => {
      dispatch(setSignUpStatus(false))
    })
}

export const setSignUpStatus = value => ({
  type: SET_SIGN_UP_STATUS,
  payload: value
})

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

export const signOut = () => dispatch => {
  Cookies.remove('token')

  dispatch({
    type: SIGN_OUT
  })
}
