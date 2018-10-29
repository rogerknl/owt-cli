import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Signin} />
        <Route path="/logout" component={Signout} />
        <Route path="/dashboard" component={Dashboard} />
      </App>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root