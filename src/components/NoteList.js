import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {
  render() {
    
    const createNote = (item) => {
      return (
        <Note key={item.id} details={item}/>
      );
    };

    return <div>{this.props.list.map(createNote)}</div>
  }
}

export default NoteList;