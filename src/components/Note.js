import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DisplayContainer from './DisplayContainer';


class Note extends Component {

  displayNote(e) {
    e.preventDefault();

    // Render note content when clicked on a note
    ReactDOM.render(<DisplayContainer details={this.props.details}/>, document.getElementById('note_container'));
  }

  render() {
    const {details} = this.props;

    return (
      <a href="#" onClick={(e) => this.displayNote(e)}><div className="bs-callout-info">{details.title}</div></a>
    );
  }
}

export default Note;
