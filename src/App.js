import React, { Component } from 'react';
import './App.css';
import { teamInput } from './ducks/reducer.js'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <input
          name='Team'
          type='text'
          value={this.props.team}
          onChange={
            (e) => { 
              this.props.teamInput(e.target.value) 
              }
          } />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    team: state.team
  }
}
export default connect(mapStateToProps, { teamInput })(App);
