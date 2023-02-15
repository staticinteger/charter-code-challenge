import React from 'react';
import './Points.css';

export default class Points extends React.Component {
  render() {
    return (
      <p id="points">Total Points: {this.props.points}</p>
    );
  }
}