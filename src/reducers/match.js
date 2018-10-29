import { MATCHES_GET,ACCOUNT_SELECT, MATCHES_ERROR  } from '../actions/types';


const INITIAL_STATE = {
  matches: [],
  selected: null,
  selected_hero: null,
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_SELECT:
      return {...INITIAL_STATE}
    case MATCHES_GET:
      return {
        ...state,
        matches: action.payload
      }
    default:
      return state;
  }
}