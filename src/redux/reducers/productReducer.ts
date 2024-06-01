import {
  ProductActionTypes,
  ProductState,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  SET_PRODUCTS,
} from '../types/productTypes';

const initialState: ProductState = {
  products: [],
};

const productReducer = (
  state = initialState,
  action: ProductActionTypes,
): ProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
