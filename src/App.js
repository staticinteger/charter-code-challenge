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

  // Quick note: we could prevent having to pass points through several components
  // by using a global state management library like Redux, or using react context
  // but I wanted to keep this example as simple as possible.
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
