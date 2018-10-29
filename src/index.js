import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import reducers from './reducers';
import Root from './Root';

let serialstate = localStorage.getItem('auth');
if (serialstate) serialstate = JSON.parse(serialstate);
else serialstate = {token: '', nick: '', userid: ''}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  { auth: { 
    authenticated: serialstate.token,
    nick: serialstate.nick,
    userid: serialstate.userid
  }},
  composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);

