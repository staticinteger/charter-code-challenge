import React from 'react';
import './Purchase.css';
import { calculatePointsOnPurchase } from '../../services/PointsService';

export default class Purchase extends React.Component {
  constructor(props) {
    super(props);

    // This will shorten the dot notation when accessing values :)
    // This also allows for the component to be more flexible in the future
    this.state = { ...props.purchase };
  }
  render() {
    if (this.state && this.state.name && this.state.amount) {
      return (
        <div className="purchase">
          <p className="purchaseName">{this.state.name}</p>
          <p className="purchaseAmount">${this.state.amount} ({calculatePointsOnPurchase(this.state)} Points)</p>
        </div>
      );
    } else {
      return (
        <div className="purchase">
          <p className='purchaseError'>Invalid Purchase Data</p>
        </div>
      );
    }
  }
}