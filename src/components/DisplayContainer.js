import React, { Component } from 'react';

class DisplayContainer extends Component {

  render() {
    const note = this.props.details;

    return (
      <div className="well">{note.title}: {note.description}</div>
    );
  }
}

export default DisplayContainer;
