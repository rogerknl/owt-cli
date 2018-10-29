import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, ACCOUNT_GET, ACCOUNT_ERROR, ACCOUNT_SELECT, ACCOUNT_ADD, SEASON_GET, SEASON_SELECT, SEASON_ERROR, MATCHES_GET, MATCHES_ERROR } from './types';
import { BASE_URL } from '../config/api.config';

export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(`${BASE_URL}/signup`, formProps);
		dispatch({ type: AUTH_USER, payload: response.data });
		localStorage.setItem( 'auth', JSON.stringify(response.data) );
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Email in use'});
	}
};

export const signout = () => {
	localStorage.removeItem('auth');
	return {
		type: AUTH_USER,
		payload: ''
	};
};

export const signin = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(`${BASE_URL}/signin`, formProps);
		dispatch({ type: AUTH_USER, payload: response.data });
		localStorage.setItem( 'auth',JSON.stringify(response.data) );
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'});
	}
};

export const addNewAccount = (token, formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(`${BASE_URL}/account`, formProps, {headers: {'Authorization': 'Bearer ' + token}});
		dispatch({ type:  ACCOUNT_ADD, payload: response.data });
		callback();
	} catch (e) {
		dispatch({ type: ACCOUNT_ERROR, payload: 'Battlenet must be unique'});
	}
};

export const getAccounts = (token) => async dispatch => {
	try {
		const response = await axios.get(`${BASE_URL}/accounts`,{headers: {'Authorization': 'Bearer ' + token}})
		dispatch({ type: ACCOUNT_GET, payload: response.data });
	} catch (e){
		dispatch({ type: ACCOUNT_ERROR, payload: 'Error on sync Accounts'});
	}
}
export const selectAccount = (id) => {
	return {
    type: ACCOUNT_SELECT,
    payload: id
  };
}

export const getSeasons = (token,accid) => async dispatch => {
	try {
		const response = await axios.get(`${BASE_URL}/accseason/${accid}`,{headers: {'Authorization': 'Bearer ' + token}})
		dispatch({ type: SEASON_GET, payload: response.data.accseason });
	} catch (e){
		dispatch({ type: SEASON_ERROR, payload: 'Error on sync Accounts'});
	}
}
export const selectSeason = (id) => {
	return {
    type: SEASON_SELECT,
    payload: id
  };
}

export const getMatches = (token,accSeasonid) => async dispatch => {
	try {
		const response = await axios.get(`${BASE_URL}/matches/${accSeasonid}`,{headers: {'Authorization': 'Bearer ' + token}})
		dispatch({ type: MATCHES_GET, payload: response.data.matches });
	} catch (e){
		dispatch({ type: MATCHES_ERROR, payload: 'Error on sync Accounts'});
	}
}
