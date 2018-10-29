import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import account from './account';
import season from './season';
import match from './match';


export default combineReducers({
	auth,
	form: formReducer,
	account,
	season,
	match
});