import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProductListTemplate } from '../templates/ProductListTemplate';
import { startFetchProducts } from '../../services/ProductList/actions';
import {
  getIsLoading,
  getProducts,
  getIsLoaded,
  getError,
  getIsError,
} from '../../services/ProductList/reducer';

class ProductListPageRaw extends Component {
  componentDidMount() {
    const { startFetchProducts } = this.props;
    startFetchProducts();
  }

  render() {
    const { isLoading, products, isLoaded, isError, error } = this.props;

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

const mapStateToProps = storeState => {
  const { productList } = storeState;
  return {
    isLoading: getIsLoading(productList),
    products: getProducts(productList),
    isLoaded: getIsLoaded(productList),
    error: getError(productList),
    isError: getIsError(productList),
  };
};

const mapDispatchToProps = {
  startFetchProducts,
};

export const ProductListPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListPageRaw);
