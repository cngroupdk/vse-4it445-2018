import React, { Component } from 'react';
import { ProductListTemplate } from '../templates/ProductListTemplate';

export class ProductListPageRaw extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: 'Lexus RX',
        price: 1400000,
        shortInfo: 'This one is nice!',
      },
      {
        id: 2,
        title: 'Škoda Octavia',
        price: 500000,
        shortInfo: 'Not that bad...',
      },
      { id: 3, title: 'Moped', price: 5000, shortInfo: 'Slowly but surely.' },
      {
        id: 4,
        title: 'Porsche Cayenne',
        price: 1800000,
        shortInfo: 'Eats even grass around the road...'
      },
    ];

    return (
      <ProductListTemplate
        products={products}
      />
    );
  }
}
