import {
  PRODUCT_LIST_FETCH_PRODUCTS,
  PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS,
  PRODUCT_LIST_FETCH_PRODUCTS_FAILURE,
} from './actions';

const initialState = {
  products: null,
  isLoading: false,
  error: null,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case PRODUCT_LIST_FETCH_PRODUCTS_SUCCESS: {
      const { products } = action.payload;

      return {
        ...state,
        products,
        isLoading: false,
        error: null,
      };
    }

    case PRODUCT_LIST_FETCH_PRODUCTS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

// - sectors - //

export const getIsLoading = state => state.isLoading;

export const getProducts = state => state.products || [];

export const getIsLoaded = state => state.products !== null;

export const getError = state => state.error;

export const getIsError = state => state.error !== null;
