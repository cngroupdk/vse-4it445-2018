import React, { Component } from 'react';

import { FontIcon } from '../atoms/FontIcon';

export class AddProductToCartButtonRaw extends Component {
  render() {
    return (
      <button
        onClick={() => {}}
        type="button"
        className="btn btn-success"
      >
        <FontIcon icon="cart-arrow-down" /> 
        Add to cart
      </button>
    );
  }
}
