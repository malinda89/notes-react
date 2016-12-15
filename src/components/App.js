import React, { Component } from 'react';
import logo from '../logo.svg';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

class App extends Component {
  constructor() {
    super();

    this.addNote = this.addNote.bind(this);

    // Initial state
    this.state = {
      notes: JSON.parse(localStorage.notes || "{}")
    };
  }

  addNote(newItem) {
    const updatedList = this.state.notes.concat([newItem]);
    this.setState({notes: updatedList});
  }

  render() {
    return (
      <div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Notes...</h2>
        </div>

        <div className="col-xs-6">
          <NoteList list={this.state.notes}/>
        </div>

        <div className="col-xs-6">
          <AddNoteForm addNote={this.addNote}/>
        </div>

      </div>
    )
  }
}

export default App;
