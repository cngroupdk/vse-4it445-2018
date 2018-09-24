import React, { Component } from 'react';
import { ShoppingCartTemplate } from '../templates/ShoppingCartTemplate';

export class ShoppingCartPageRaw extends Component {
  render() {
    const { items, removeProductFromCart } = this.props;

    return (
      <ShoppingCartTemplate
        items={items}
        onRemoveProductFromCart={removeProductFromCart}
      />
    );
  }
}
