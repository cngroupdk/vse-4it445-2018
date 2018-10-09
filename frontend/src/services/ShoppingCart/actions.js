// action type
export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';

// action creator
export const addProductToCart = product => ({
  type: SHOPPING_CART_ADD_PRODUCT,
  payload: {
    product,
  },
});
