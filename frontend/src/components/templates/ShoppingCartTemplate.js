import React, { Component } from 'react';
import { Layout } from '../atoms/Layout';
import { Jumbotron } from '../atoms/Jumbotron';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export class ShoppingCartTemplate extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron>
          <Heading>Shopping Cart</Heading>
        </Jumbotron>
        <Paragraph>Cart is empty...</Paragraph>
        {/* TODO: (advanced) Add logic for displaying items*/}
      </Layout>
    );
  }
}
