import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Note from './Note';

class App extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      notes: JSON.parse(localStorage.notes || "{}")
    };
  }

  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <p className="App-intro">
            <h3>Notes</h3>
            <ul>
              {
                this.state.notes.map(note => <Note details={note}/>)
              }
            </ul>
          </p>
        </div>

      </div>
    )
  }
}

export default App;
