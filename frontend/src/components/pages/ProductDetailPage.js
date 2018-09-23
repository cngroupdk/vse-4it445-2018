import React, { Component } from 'react';

import { ProductDetailTemplate } from '../templates/ProductDetailTemplate';

export class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 0,
      product: {
        id: 1,
        title: 'Abc',
        price: 10000,
        shortInfo: 'Here is an info...',
      },
    };
  }

  selectTab = tabId => {
    this.setState({ activeTabId: tabId });
  };

  render() {
    const { product, activeTabId } = this.state;

    return (
      <ProductDetailTemplate
        isLoading={!product}
        product={product}
        activeTabId={activeTabId}
        selectTab={this.selectTab}
      />
    );
  }
}
