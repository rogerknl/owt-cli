import React, { Component } from 'react';


import './Herostats.css';

const heroMap = {
  'dva': ['WEAPON ACCURACY(%)','KILL STREAK - BEST','DAMAGE BLOCKED','SELF-DESTRUCT KILLS', 'MECHS CALLED'],
  'orisa': ['WEAPON ACCURACY(%)','KILL STREAK - BEST','DAMAGE BLOCKED','OFFENSIVE ASSISTS','DAMAGE AMPLIFIED'],
  'reinhardt':  ['DAMAGE BLOCKED','KILL STREAK - BEST','CHARGE KILLS','FIRE STRIKE KILLS','EARTHSHATTER KILLS'],
  'roadhog':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','ENEMIES HOOKED','HOOK ACCURACY(%)','SELF HEALING','WHOLE HOG KILLS'],
  'winston':  ['DAMAGE BLOCKED','KILL STREAK - BEST','MELEE KILLS','PLAYERS KNOCKED BACK','PRIMAL RAGE KILLS'],
  'wrecking ball':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','GRAPPING CLAW KILLS','PILEDRIVER KILLS','MINEFIELD KILLS'],
  'zarya': ['DAMAGE BLOCKED','KILL STREAK - BEST','HIGH ENERGY KILLS','AVERAGE ENERGY(%)','GRAVITON SURGE KILLS'],

  'bastion': ['WEAPON ACCURACY(%)','KILL STREAK - BEST','RECON KILLS','SENTRY KILLS','TANK KILLS','SELF HEALING'],
  'doomfist':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','ABILITY DAMAGE DONE','METEOR STRIKE KILLS','SHIELDS CREATED'],
  'genji':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','DAMAGE REFLECTED','DRAGONBLADE KILLS'],
  'hanzo':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','CRITICAL HITS','RECON ASSISTS','DRAGONSTRIKE KILLS'],
  'junkrat':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','ENEMIES TRAPED','RIP-TIRE KILLS'],
  'mcree':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','CRITICAL HITS','DEADEYE KILLS', 'FAN THE HAMMER KILLS'],
  'mei':  ['DAMAGE BLOCKED','KILL STREAK - BEST','ENEMIES FROZEN','BLIZZARD KILLS','SELF HEALING'],
  'pharah':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','BARRAGE KILLS','ROCKET DIRECT HITS'],
  'reaper':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','DEATH BLOSSOM KILLS','SELF HEALING'],
  'soldier: 76':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','HELIX ROCKETS KILLS','TACTICA VISOR KILLS'],
  'sombra':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','OFFENSIVE ASSISTS','ENEMIES HACKED','ENEMIES EMP\'D'],
  'symmetra':  ['SENTRY TURRED KILLS','KILL STREAK - BEST','DAMAGE BLOCKED','PLAYERS TELEPORTED','PRIMARY FIRE ACCURACY(%)','SECONDARY FIRE ACCURACY(%)'],
  'torbjörn':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','TORBJÖRN KILLS','TURRET KILLS','MOLTEN CORE KILLS','TURRET DAMAGE'],
  'tracer':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','FINAL BLOWS','PULSE BOMB KILLS','PULSE BOMBS ATTACHED'],
  'widowmaker':  ['RECON ASSISTS','KILL STREAK - BEST','FINAL BLOWS','SCOPED ACCURACY(%)','SCOPED CRITICAL HITS'],

  'ana': ['UNSCOPED ACCURACY(%)','SCOPED ACCURACY(%)','DEFENSIVE ASSISTS','NANO BOOST ASSISTS','ENEMIES SLEPT'],
  'brigitte':  ['OFFENSIVE ASSISTS','DEFENSIVE ASSISTS','DAMAGE BLOCKED','ARMOR PROVIDED','INSPIRE UPTIME PERCENTAGE(%)'],
  'lúcio': ['WEAPON ACCURACY(%)','KILL STREAK - BEST','SOUND BARRIERS PROVIDED','OFFENSIVE ASSISTS','DEFENSIVE ASSISTS'],
  'mercy': ['OFFENSIVE ASSISTS','DEFENSIVE ASSISTS','PLAYERS RESURRECTED','BLASTER KILLS','DAMAGE AMPLIFIED'],
  'moira':  ['SECONDARY FIRE ACCURACY(%)','KILL STREAK - BEST','DEFENSIVE ASSISTS','COALESCENCE KILLS','COALESCENCE HEALING','SELF HEALING'],
  'zenyatta':  ['WEAPON ACCURACY(%)','KILL STREAK - BEST','OFFENSIVE ASSISTS','DEFENSIVE ASSISTS','TRANSCENDENCE HEALING']
}



class Herostats extends Component{
  findHero = (hero) => {
    return hero.hero === this.props.selected;
  }
  shouldPrint(){
    if (this.props.selected){
      return (
        <div className="hStatsContainer">
          <span className="heroName">{this.props.selected}</span>
          <div className="hStatsBoxData">
            {this.showStatshero()}
          </div>
        </div>
        
      )
    }
    return '';
  }
  showStatshero(){
    const hero = this.props.heroes.find(this.findHero);
    if (heroMap[hero.hero][5]){
      return (
        <div className="hStatsBoxDataHGrid" key={hero.id}>
          <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sFirst}</span><br />{heroMap[hero.hero][0]}</div>
          <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sSecond}</span><br />{heroMap[hero.hero][1]}</div>
          <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sThird}</span><br />{heroMap[hero.hero][2]}</div>
          <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sForth}</span><br />{heroMap[hero.hero][3]}</div>
          <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sFifth}</span><br />{heroMap[hero.hero][4]}</div>
          <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sSixth}</span><br />{heroMap[hero.hero][5]}</div>
      </div>
      )
    }
    return (
      <div className="hStatsBoxDataHGrid" key={hero.id}>
        <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sFirst}</span><br />{heroMap[hero.hero][0]}</div>
        <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sSecond}</span><br />{heroMap[hero.hero][1]}</div>
        <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sThird}</span><br />{heroMap[hero.hero][2]}</div>
        <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sForth}</span><br />{heroMap[hero.hero][3]}</div>
        <div className="hStatsBoxDataHGridElement"><span className="hStatsBoxDataElementNumber">{hero.sFifth}</span><br />{heroMap[hero.hero][4]}</div>
    </div>
    )
  }
  render() {
    return this.shouldPrint();
  }
}

export default Herostats;