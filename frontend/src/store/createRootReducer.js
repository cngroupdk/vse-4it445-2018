import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { shoppingCartReducer } from '../services/ShoppingCart/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shoppingCart'],
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
