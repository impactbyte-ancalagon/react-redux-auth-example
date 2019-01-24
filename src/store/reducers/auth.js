import { SIGN_IN, SET_SIGN_UP_STATUS, SIGN_OUT } from '../types'

const initialState = {
  isAuthenticated: false,
  isSignUpSuccess: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN_UP_STATUS:
      return { isSignUpSuccess: action.payload }
    case SIGN_IN:
      return { isAuthenticated: true }
    case SIGN_OUT:
      return { isAuthenticated: false }
    default:
      return state
  }
}
