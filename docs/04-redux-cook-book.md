# Redux cookbook  - how to enhance component with redux in 4 steps

### Redux Checklist: 
 1) create action and action creator  
  a) define type of action   
  b) create action creator function 
 2) create reducer or reaction to action in existing reducer  
  a) import action type  
  b) add reaction to action type  
  c) add initial state  
 3) registered reducer in redux store  
  a) import reducer  
  b) name reducer and add it to `storeState`  
 4) connect your component map actions and `storeState`  
  a) import action creator  
  b) import `connect` from redux  
  c) map action creators to props with `mapDispatchToProps`(object) field in `connect`  
  d) map storeState to props with `mapStateToProps`(function) field in `connect`  
  e) wrap your component with redux using `connect`  

## Examples: 
### 1) create action and action creator

Each action have a `type` -> name that uniquely identifies the action and can also have `payload` as second parameter it is used to pass data

`src/services/ShoppingCart/actions.js`
```js
// action type
export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';

// action creator
export const addProductToCart = product => ({
  type: SHOPPING_CART_ADD_PRODUCT,
  payload: {
    product,
  },
});
```
---

## 2) create reducer or reaction to action in existing reducer

`src/services/ShoppingCart/reducer.js`
```js
import {
  SHOPPING_CART_ADD_PRODUCT,
} from './actions';

// shape of store
const initialState = {
  items: [],
};

// reducer - definition of what to do when action occurs
export const shoppingCartReducer = (state = initialState, action) => { // shoppingCartReducer listens to every action 
  switch (action.type) { // here it checks the `type` of acction
    case SHOPPING_CART_ADD_PRODUCT: { // and reacts only to specified ones 
      const { product } = action.payload;

      return {
        ...state, // spread previous state
        items: [
            ...state.items, // spread previous items
            product, // add product at the last position
        ],
      };
    }

    default:
      return state;
  }
};
// selectors - wrap the store so you dont need to know the store shape to get the data
export const getStoreIsEmpty = ({ items }) => !items.length > 0;
```
---

## 3) check if reducer is correctly registered in main redux store

`src/store/createRootReducer.js` 
```js
import { combineReducers } from 'redux';

import { shoppingCartReducer } from '../services/ShoppingCart/reducer';

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer, // our reducer 
    // ... more reducers will be registered here
  });

  return rootReducer;
};
```
---

## 4) connect your component with action and state
`AddProductToCartButton.js` smart component(container) 
```js
import React, { Component } from 'react';

import { FontIcon } from '../atoms/FontIcon';

// React component 
export class AddProductToCartButtonRaw extends Component {
  render() {
    const { product, addProductToCart } = this.props;

    return (
      <button
        onClick={() => addProductToCart(product)}
        type="button"
        className="btn btn-success"
      >
        <FontIcon icon="cart-arrow-down" /> Add to cart
      </button>
    );
  }
}; 
```


`AddProductToCartButton.js` redux enhancement
```js
import { connect } from 'react-redux';
import { addProductToCart } from '../../services/ShoppingCart/actions';
import { getStoreIsEmpty } from '../../services/ShoppingCart/reducer';

 // reads state (from reducer)
const mapStateToProps = storeState => ({
  cartIsEmpty: getStoreIsEmpty(storeState.shoppingCart) // favor selectors
});

// actions
const mapDispatchToProps = { 
  addProductToCart,
};

// wrapper around React component that add redux actions and store to component as props
export const AddProductToCartButton = connect( 
  mapStateToProps,
  mapDispatchToProps,
)(AddProductToCartButtonRaw);
```

