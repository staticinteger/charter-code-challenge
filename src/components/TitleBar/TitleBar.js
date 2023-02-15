import React from 'react';
import Points from '../Points/Points';
import './TitleBar.css';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div id="titleBar">
        <h1>My Purchases</h1>
        <Points />
      </div>
    );
  }
}