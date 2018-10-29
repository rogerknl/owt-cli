import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.shouldNavigateAway();
  }

  // Our component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.aError && this.props.token ) {
      this.props.history.push('/dashboard');
    }
  }
  render(){
    return (
      <div>
        Home
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    token: state.auth.authenticated,
    aError: state.auth.ererrorMessage
  };
}
export default connect(mapStateToProps)(Home);