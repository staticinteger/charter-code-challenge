import React from 'react';
import './TitleBar.css';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div id="titleBar">
        <h1>My Purchases</h1>
        <p className="totalPoints">Total Points: {this.props.points ? this.props.points : 0}</p>
      </div>
    );
  }
}