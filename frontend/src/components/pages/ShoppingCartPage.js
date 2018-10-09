import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ShoppingCartTemplate } from '../templates/ShoppingCartTemplate';
import { PRODUCTS } from '../../mock-data';
import {
  getItems
} from '../../services/ShoppingCart/reducer';

export class ShoppingCartPageRaw extends Component {
  render() {
    const { items } = this.props;
    return <ShoppingCartTemplate items={items} />;
  }
}

const mapStateToProps = storeState => ({
  items: getItems(storeState.shoppingCart)
});

export const ShoppingCartPage =
  connect(mapStateToProps)(ShoppingCartPageRaw);






//
