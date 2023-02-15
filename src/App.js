import React from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import Purchases from './components/Purchases/Purchases';
import { getPurchases } from './services/ApiService';
import { calculateTotalPoints } from './services/PointsService';

class App extends React.Component {
  constructor() {
    super();

    const purchases = getPurchases();

    this.state = {
      purchases,
      totalPoints: calculateTotalPoints(purchases)
    };
  }

  render() {
    return (
      <div id="App">
        <TitleBar points={this.state.totalPoints}/>
        <Purchases purchases={this.state.purchases} />
      </div>
    );
  }
}

export default App;
