import React, { Component } from 'react';

import { Button } from '../atoms/Button';
import { FontIcon } from '../atoms/FontIcon';

export class AddProductToCartButtonRaw extends Component {
  render() {
    const { product, addProductToCart } = this.props;

    return (
      <Button
        onClick={() => addProductToCart && addProductToCart(product)}
        variant="success"
      >
        <FontIcon icon="cart-arrow-down" /> Add to cart
      </Button>
    );
  }
}

export const AddProductToCartButton = AddProductToCartButtonRaw;
