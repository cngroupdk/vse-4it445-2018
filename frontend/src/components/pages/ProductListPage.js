import React, { Component } from 'react';

import { PRODUCTS } from '../../mock-data';
import { ProductListTemplate } from '../templates/ProductListTemplate';

class ProductListPageRaw extends Component {
  render() {
    const products = PRODUCTS;
    const isLoading = false;
    const isLoaded = true;
    const isError = false;
    const error = null;

    return (
      <ProductListTemplate
        isLoading={isLoading}
        isLoaded={isLoaded}
        isError={isError}
        products={products}
        error={error}
      />
    );
  }
}

export const ProductListPage = ProductListPageRaw;
