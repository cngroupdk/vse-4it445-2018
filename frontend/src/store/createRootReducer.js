import { combineReducers } from 'redux';

import {
  shoppingCartReducer
} from '../services/ShoppingCart/reducer';

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    dummy: (state = {}, action) => { return state; },
  });

  return rootReducer;
};
