import React from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import Purchases from './components/Purchases/Purchases';
import { getPurchases } from './services/ApiService';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      purchases: getPurchases()
    };
  }

  render() {
    return (
      <div id="App">
        <TitleBar />
        <Purchases purchases={this.state.purchases} />
      </div>
    );
  }
}

export default App;
