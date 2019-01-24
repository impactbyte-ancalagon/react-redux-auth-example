import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../types'

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
    case SIGN_OUT:
      return { isAuthenticated: false }
    default:
      return state
  }
}
