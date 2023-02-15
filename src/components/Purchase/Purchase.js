import React from 'react';
import './Purchase.css';

export default class Purchase extends React.Component {
  render() {
    return (
      <div className="purchase">
        <p>{this.props.purchase.name}</p>
        <p>{this.props.purchase.price} (4 Points)</p>
      </div>
    );
  }
}