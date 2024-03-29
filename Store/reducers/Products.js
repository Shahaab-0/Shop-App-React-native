import PRODUCTS from '../../dummy-data';
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '../actions/Products';
import Product from '../../Models/Product';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'ui',
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price,
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid,
      );
      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData[productIndex].price,
      );

      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;

      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid,
      );
      const updatedAvailableProduct = [...state.availableProducts];
      updatedAvailableProduct[availableProductIndex] = updatedProduct;
      return {
        ...state,
        userProducts: updatedUserProducts,
        availableProducts: updatedAvailableProduct,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid,
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid,
        ),
      };
  }
  return state;
};
