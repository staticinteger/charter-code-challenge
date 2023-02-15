import React from 'react';
import './Purchases.css';

import Purchase from '../Purchase/Purchase';

export default class Purchases extends React.Component {
  render() {
    if (this.props.purchases && this.props.purchases.length > 0) {
      return (
        <div id="purchases">
          {this.props.purchases && this.props.purchases.map((purchase) => {
            return <Purchase key={purchase.id} purchase={purchase} />
          })}
        </div>
      );
    } else {
      return (
        <div id="purchases">
          <p className="purchasesError">No Purchases Found</p>
        </div>
      )
    }
  }
}