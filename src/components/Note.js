import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class Note extends Component {

  render() {
    const {details} = this.props;

    return (
      <li>
        <h3>{details.id}: {details.title}</h3>
        <p>{details.description}</p>
      </li>
    );
  }
}

export default Note;
