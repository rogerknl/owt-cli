import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import AccountSeason from './AccountSeason';
import Matches from './Matches';
import NewAccount from './forms/newAccount';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount(){
    this.props.getAccounts(this.props.token);
  }

  changeAccountSelection(id){
    this.props.selectAccount(id);

  }
  renderMatches(){
    if (this.props.accSelected === -1){
      return (
        <NewAccount />
      );
    } else if (this.props.accSelected && this.props.accSelected > 0 && this.props.seasonSelected && this.props.seasonSelected > 0 ){
      this.props.getMatches(this.props.token,this.props.seasonSelected);
      return (
          <Matches />
      )
    } else {
      return '';
    }

  }
  renderContent(){
    if (this.props.accounts.length ===0){

    } else {
      const ret =  this.props.accounts.map((account)=> {
        if (account.id === this.props.accSelected){
          return <div className="accountBox selected" key={account.id}>{account.bnet}</div>
        }
        return (<div className="accountBox" onClick={()=>this.changeAccountSelection(account.id)} key={account.id}>{account.bnet}</div>)
      })
      ret.push(<div className="accountBox accountBoxPlus" onClick={()=>this.changeAccountSelection(-1)}key="addAccount">+</div>)
      return ret;
    }
  }

  render(){
    return (
      <div className="dashboardContent">
        <div className="dashboardHeader">
          {this.renderContent()}
          <AccountSeason />
        </div>
        <div className="dashboardBody">
          {this.renderMatches()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.authenticated,
    bnet: state.auth.bnet,
    accounts: state.account.accounts,
    accSelected: state.account.selected,
    seasonSelected: state.season.selected
  }
};
export default connect(mapStateToProps,actions)(Dashboard);