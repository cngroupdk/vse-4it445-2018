import React, { Component } from 'react';

import { ShoppingCartTemplate } from '../templates/ShoppingCartTemplate';
import { PRODUCTS } from '../../mock-data';

export class ShoppingCartPageRaw extends Component {
  render() {
    const items = [
      { product: PRODUCTS[0], count: 1 },
      { product: PRODUCTS[1], count: 2 },
    ];

    return <ShoppingCartTemplate items={items} />;
  }
}

export const ShoppingCartPage = ShoppingCartPageRaw;
