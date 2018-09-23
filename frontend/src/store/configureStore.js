import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import api from '../api';
import { createRootReducer } from './createRootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const rootReducer = createRootReducer();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ api }))),
  );

  return store;
};
