import { SIGN_IN, SIGN_UP } from '../types'

const initialState = {
  isAuthenticated: false,
  isSignUpSuccess: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { isSignUpSuccess: true }
    case SIGN_IN:
      return { isAuthenticated: true }
    default:
      return state
  }
}
