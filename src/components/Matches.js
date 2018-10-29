import React, { Component } from 'react';
import { connect } from 'react-redux';

import MatchElement from './MatchElement';
import * as actions from '../actions';

import './Matches.css';

class Matches extends Component {
  componentDidMount(){
  }
  renderMatches(){
    if (this.props.matches.length === 0){
      return 'there isn\'t any match yet'      
    } else {
      return this.props.matches.map((match)=>{
        return (
          <MatchElement match={match} key={match.id}/>
        );
      });
    }
  }
  
  render (){
    return (
      <div>
        {this.renderMatches()}
      </div>
    );
  };
}
const mapStateToProps = state => {
  return{
    matches: state.match.matches,
  };
}
export default connect(mapStateToProps,actions)(Matches);