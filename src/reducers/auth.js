import { AUTH_USER, AUTH_ERROR } from '../actions/types';
const INITIAL_STATE = {
  authenticated: '',
  name: '',
  ererrorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case AUTH_USER:
      return { 
        ...state, 
        authenticated: action.payload.token,
        nick: action.payload.nick,
        userid: action.payload.userid
      }
    default:
      return state;
  }
}