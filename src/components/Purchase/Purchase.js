import React from 'react';
import './Purchase.css';
import { calculatePointsOnPurchase } from '../../services/PointsService';

export default class Purchase extends React.Component {
  render() {
    return (
      <div className="purchase">
        <p>{this.props.purchase.name}</p>
        <p>${this.props.purchase.amount} ({calculatePointsOnPurchase(this.props.purchase)} Points)</p>
      </div>
    );
  }
}