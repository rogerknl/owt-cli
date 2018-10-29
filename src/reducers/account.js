import { ACCOUNT_GET, ACCOUNT_SELECT, ACCOUNT_ERROR, ACCOUNT_ADD  } from '../actions/types';

const INITIAL_STATE = {
  accounts: [],
  selected: null,
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_ADD:
      const auxAcc = state.accounts.slice();
      auxAcc.push(action.payload);
      return {
        ...state,
        selected: null,
        accounts: auxAcc
      }
    case ACCOUNT_ERROR:
      return { ...state, errorMessage: action.payload }
    case ACCOUNT_SELECT:
      return {
        ...state,
        selected: action.payload
      }
    case ACCOUNT_GET:
      return {
        ...state,
        accounts: action.payload
      };
    default:
      return state;
  }
}