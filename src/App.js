import React from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import Purchases from './components/Purchases/Purchases';
import { getPurchases } from './services/ApiService';
import { calculateTotalPoints } from './services/PointsService';

class App extends React.Component {
  constructor() {
    super();
    // Get the purchases from the "API".
    const purchases = getPurchases();

    // set the initial state of the App component.
    // and calculate the total points while we're at it.
    // ideally we would calculate the total points in the API service
    // on the server side for larger data sets, but for the sake of this
    // exercise we'll do it here since we are only calculating on the last
    // "3 months" of purchases this should be a relatively quick calculation anyways.
    this.state = {
      purchases,
      totalPoints: calculateTotalPoints(purchases)
    };
  }

  render() {
    return (
      <div id="App">
        <TitleBar points={this.state.totalPoints}/>
        {this.state.purchases && this.state.purchases.length > 0 && (
          <Purchases purchases={this.state.purchases} />
        )}
      </div>
    );
  }
}

export default App;
