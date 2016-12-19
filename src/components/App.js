import React, { Component } from 'react';
import logo from '../logo.svg';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

class App extends Component {
  constructor() {
    super();

    this.addNote = this.addNote.bind(this);
    this.updateFormVisibility = this.updateFormVisibility.bind(this);

    // Initial state
    this.state = {
      notes: JSON.parse(localStorage.notes || "{}"),
      showAddform: false,
    };
  }

  // add new item to list
  addNote(newItem) {
    const updatedList = this.state.notes.concat([newItem]);
    this.setState({notes: updatedList});
    this.updateFormVisibility();
  }

  // Toggle 'Add note form' visibility
  updateFormVisibility() {
    this.setState({showAddform: !this.state.showAddform});
  }

  // Navigate to a given path
  goTo(e, path) {
    e.preventDefault();
    this.context.router.transitionTo(`/${path}`);
  }

  render() {
    return (
      <div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <button className="btn btn-success" onClick={this.updateFormVisibility}>Create new note</button>
          
          <div>
            <a href="#" onClick={(e) => this.goTo(e, "contact")}><h3>Contact Us!</h3></a>
          </div>
        </div>

        <div className="col-md-6 col-xs-12">
          <NoteList list={this.state.notes}/>
        </div>

        <div className="col-md-6 col-xs-12">
          <div id="note_container"></div>
          {this.state.showAddform && <AddNoteForm addNote={this.addNote}/>}
        </div>

      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
