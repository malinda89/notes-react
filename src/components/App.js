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
      notes: JSON.parse(localStorage.notes || "{}"),
      showAddform: false
    };
  }

  addNote(newItem) {
    const updatedList = this.state.notes.concat([newItem]);
    this.setState({notes: updatedList});
    showForm();
  }

  showForm() {
    this.setState({showAddform: !this.state.showAddform});
  }

  render() {
    return (
      <div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="btn btn-success" onClick={this.showForm.bind(this)}>Create new note</button>
        </div>

        <div className="col-xs-6">
          <NoteList list={this.state.notes}/>
        </div>

        <div className="col-xs-6">
          {this.state.showAddform && <AddNoteForm addNote={this.addNote}/>}
        </div>

      </div>
    )
  }
}

export default App;
