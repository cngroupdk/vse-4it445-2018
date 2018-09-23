import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../atoms/Button';
import { FontIcon } from '../atoms/FontIcon';
import { Heading } from '../atoms/Heading';
import { Layout } from '../atoms/Layout';

export class ShoppingCartItem extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { product, count } = this.props;

    return (
      <Heading level="5" className="row">
        <Layout className="col-sm-4">{product.title}</Layout>
        <Layout className="col-sm-3 text-right">
          {count}
          &times;
        </Layout>
        <Layout className="col-sm-4 text-right">
          {product.price}
          &nbsp;Kč
        </Layout>
        <Layout className="col-sm-1 text-right">
          <Button variant="danger" size="sm">
            <FontIcon icon="trash" />
          </Button>
        </Layout>
      </Heading>
    );
  }
}
