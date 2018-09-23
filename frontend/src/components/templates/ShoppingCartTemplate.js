import React, { Component } from 'react';

import { Layout } from '../atoms/Layout';
import { Jumbotron } from '../atoms/Jumbotron';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import { ShoppingCartItem } from '../molecules/ShoppingCartItem';

export class ShoppingCartTemplate extends Component {
  render() {
    const { items } = this.props;

    return (
      <Layout>
        <Jumbotron>
          <Heading>Shopping Cart</Heading>
        </Jumbotron>

        {items.length === 0 && <Paragraph>Cart is empty...</Paragraph>}

        {items.map(item => (
          <ShoppingCartItem
            key={item.product.id}
            product={item.product}
            count={item.count}
          />
        ))}
      </Layout>
    );
  }
}
