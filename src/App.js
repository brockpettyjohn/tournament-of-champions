import React, { Component } from 'react';
import './App.css';
import { teamInput, teamListCreator, gameCreator } from './ducks/reducer.js'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { team, teamListCreator, teamInput, teamsList, gamesOfSeason } = this.props
    const gameReady = gamesOfSeason.map((indGame, i) => {
      return (
        <div key={i}>
          {indGame}
        </div>
      )
    })
    const teams = teamsList.map((eaTeam, i) => {
      return (
        <div key={i}>
          {eaTeam}
        </div>
      )
    })
    return (
      <div>
        <input
          placeholder='Team'
          type='text'
          value={team}
          onChange={
            (e) => {
              teamInput(e.target.value)
            }
          } onKeyPress={e => {
            if (e.key === 'Enter') {
              teamListCreator(team)
            }
          }} />
        <button onClick={() => { teamListCreator(team) }}>Add</button>
        <div>{teams}</div>
        <button onClick={() => { gameCreator() }}></button>
        <div>{gameReady}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    team: state.team,
    teamsList: state.teamsList,
    gamesOfSeason: state.gamesOfSeason
  }
}
export default connect(mapStateToProps, { teamInput, teamListCreator, gameCreator })(App);
