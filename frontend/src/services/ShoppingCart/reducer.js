import { SHOPPING_CART_ADD_PRODUCT } from './actions';

import { PRODUCTS } from '../../mock-data';

const initialState = {
  items: [
    { product: PRODUCTS[0], count: 100 },
    { product: PRODUCTS[1], count: 200 },
  ],
};

export const shoppingCartReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOPPING_CART_ADD_PRODUCT: {
      const { product } = action.payload;

      return {
        ...state,
        items: [
            ...state.items,
            { product, count: 1 },
            //{ product: product, counte: 1 },
        ],
      };
    }

    default:
      return state;
  }
};

// -- selectors -- //

export const getItems = (state) => state.items;
