import React from 'react';

import { Layout } from '../atoms/Layout';
import { Jumbotron } from '../atoms/Jumbotron';
import { Heading } from '../atoms/Heading';
import { ProductList } from '../organisms/ProductList';

export const ProductListTemplate = ({
  products,
}) => {
  return (
    <Layout>
      <Jumbotron>
        <Heading>All Products</Heading>
      </Jumbotron>
      <ProductList products={products} />
    </Layout>
  );
};
