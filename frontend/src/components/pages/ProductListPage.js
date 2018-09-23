import React, { Component } from 'react';

import { PRODUCTS } from '../../mock-data';
import { ProductListTemplate } from '../templates/ProductListTemplate';

export class ProductListPageRaw extends Component {
  render() {
    const products = PRODUCTS;

    return <ProductListTemplate products={products} />;
  }
}

export const ProductListPage = ProductListPageRaw;
