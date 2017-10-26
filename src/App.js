import React, { Component } from 'react';
import './App.css';
import { teamInput, gameCreator } from './ducks/reducer.js'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { team, gameCreator, teamInput, games } = this.props
    const teams = games.map((eaTeam, i) =>{
      return (
        <div key={ i }>
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
          } />
        <button onClick={ () => { gameCreator(team) } }>Add</button>
        <div>{teams}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    team: state.team,
    games: state.games
  }
}
export default connect(mapStateToProps, { teamInput, gameCreator })(App);
