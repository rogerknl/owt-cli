import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

import './AccountSeason.css';

class AccountSeason extends Component {
  componentDidMount(){
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.accSelected !== this.props.accSelected){
      this.props.getSeasons(this.props.token,this.props.accSelected);
    }
  }

  handleChange(e){
    this.props.selectSeason(e.target.value);
  }
  
  renderSeasons(){
    if (this.props.seasons && this.props.seasons.length > 0){
      const ret =  this.props.seasons.map((accseason)=> {
        if (accseason.id === this.props.seasonSelected){
          return <option value={accseason.id} key={accseason.id} selected>Season {accseason.season_id}</option>
        }
        return (<option value={accseason.id} key={accseason.id}>Season {accseason.season_id}</option>)
      })
      return (
        <select onChange={(e) => {this.handleChange(e) }}>
          <option value="0">Select season</option>
          {ret}
        </select>
      )
    }
  }

  render(){
    return(
      <div className="accountSeasonBox">
        {this.renderSeasons()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.authenticated,
    accSelected: state.account.selected,
    seasons: state.season.seasons,
    seasonSelected: state.season.selected
  };
};
export default connect(mapStateToProps,actions)(AccountSeason);