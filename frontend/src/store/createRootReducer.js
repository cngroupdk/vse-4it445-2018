import { combineReducers } from 'redux';

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    dummy: (state = {}, action) => { return state; },
  });

  return rootReducer;
};
