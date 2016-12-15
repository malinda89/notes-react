import React, { Component } from 'react';

class Note extends Component {

  render() {
    const {details} = this.props;

    return (
      <a><div className="bs-callout-info">{details.title}</div></a>
    );
  }
}

export default Note;
