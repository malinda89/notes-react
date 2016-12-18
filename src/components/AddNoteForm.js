import React, { Component } from 'react';

class AddNoteForm extends React.Component {
  createNote(e) {
    e.preventDefault();

    const note = {
      title: this.title.value,
      description: this.description.value
    }

    this.props.addNote(note);
    
    // Reset form after adding a new note
    this.noteForm.reset();
  }

  render() {
    return (
      <div>
        <form ref={(input) => this.noteForm = input} onSubmit={(e) => this.createNote(e)}>
          <div className="form-group">
            <label>Title</label>
            <input ref={(input) => this.title = input} type="text" className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input ref={(input) => this.description = input} type="text" className="form-control" placeholder="Description"/>
          </div>
          <div>
            <button className="pull-right btn btn-success" type="submit">Add Note</button>
          </div>
        </form> 
      </div>
    )
  }

}

export default AddNoteForm;