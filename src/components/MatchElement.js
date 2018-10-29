import React, {Component} from 'react';

import HeroStats from './Herostats';
import './MatchElement.css';


class MatchElement extends Component {
  constructor(props){
    super(props);
    this.state = {
      heroSelected: null
    }
  }
  handleclick = (e, id) =>{
    e.preventDefault();
    this.setState({
      selected: id
    })
  }

  renderMatch(){
    const match = this.props.match;
    let result;
    if( match.victory === 1 ) result = 'Victory'
    else if( match.victory === -1) result = 'Draw'
    else result= 'Defeat'
    const heroes = match.heroes.map( hero => {
      return ( 
        <button className="selectHeroButton" onClick={(e)=>this.handleclick(e,hero.hero)} key={hero.id}>{hero.hero}</button>
      )}
    );
    if ( match.vod ){
      return(
        <div 
        className="matchBox" 
        key={this.props.match.id}>
        
        <div className="matchBoxDataM">
          <div className="matchBoxData">
            <div className="matchBoxDataElement">Day: {match.timestamp}</div>
            <div className="matchBoxDataElement">Duration: {match.duration}</div>
            <div className="matchBoxDataElement">Result: {result}</div>
            <div className="matchBoxDataElement">VOD: {"https://www.youtube.com/watch?v="+match.vod}</div>
          </div>
          <div className="matchBoxDataH">
            <div className="matchBoxDataHero">Heroes: {heroes}</div>
            <div className="matchBoxDataHGrid">
              <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.elim}</span><br />ELIMINATIONS</div>
              <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.aObj}</span><br />OBJECTIVE KILL</div>
              <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.tObj}</span><br />OBJECTIVE TIME</div>
              <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.dmg}</span><br />HERO DAMAGE DONE</div>
              <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.healing}</span><br />HEALING DONE</div>
              <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.deaths}</span><br />DEATHS</div>
            </div>
          </div>
        </div>
        <div className="matchBocVodIframe">
         <iframe 
            src={"https://www.youtube.com/embed/"+match.vod}
            frameBorder="0"
            allowFullScreen= {true}>
          </iframe>
        </div>
        <HeroStats selected={this.state.selected} heroes={ this.props.match.heroes }/>
        </div>
      )
    } 
    return (
      <div 
      className="matchBox" 
      key={this.props.match.id}>

      <div className="matchBoxDataM">
        <div className="matchBoxData">
          <div className="matchBoxDataElement">Day: {match.timestamp}</div>
          <div className="matchBoxDataElement">Duration: {match.duration}</div>
          <div className="matchBoxDataElement">Result: {result}</div>
          <div className="matchBoxDataElement">VOD: {"https://www.youtube.com/watch?v="+match.vod}</div>
        </div>
        <div className="matchBoxDataH">
          <div className="matchBoxDataHero">Heroes: {heroes.toString()}</div>
          <div className="matchBoxDataHGrid">
            <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.elim}</span><br />ELIMINATIONS</div>
            <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.aObj}</span><br />OBJECTIVE KILL</div>
            <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.tObj}</span><br />OBJECTIVE TIME</div>
            <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.dmg}</span><br />HERO DAMAGE DONE</div>
            <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.healing}</span><br />HEALING DONE</div>
            <div className="matchBoxDataHGridElement"><span className="matchBoxDataElementNumber">{match.deaths}</span><br />DEATHS</div>
          </div>
        </div>
      </div>
      <HeroStats heroes={ this.props.match.heroes }/>
      </div>
    );
  }

  render(){
    return this.renderMatch();
  }
}

export default MatchElement;