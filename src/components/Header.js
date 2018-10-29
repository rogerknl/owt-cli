import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="NavBar-profileItems">
          <Link to="/logout">Logout</Link>
        </div>
      );
    } else {
      return (
        <div className="NavBar-profileItems">
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <div className="NavBar">
          <div className="NavBar-Items">
            <Link to="/">HOME</Link>
          </div>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
};

export default connect(mapStateToProps)(Header);