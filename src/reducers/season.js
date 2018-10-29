import { SEASON_GET, SEASON_SELECT,ACCOUNT_SELECT, SEASON_ERROR  } from '../actions/types';


const INITIAL_STATE = {
  seasons: [],
  selected: null,
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_SELECT:
      return {...INITIAL_STATE}
    case SEASON_SELECT:
      return {
        ...state,
        selected: action.payload
      }
    case SEASON_GET:
      return {
        ...state,
        seasons: action.payload
      };
    default:
      return state;
  }
}