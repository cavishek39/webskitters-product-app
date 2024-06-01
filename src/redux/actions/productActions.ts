import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  SET_PRODUCTS,
  ProductActionTypes,
  Product,
} from '../types/productTypes';

export const setProducts = (products: Product[]): ProductActionTypes => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addProductRequest = (
  product: Omit<Product, 'id'>,
): ProductActionTypes => ({
  type: ADD_PRODUCT_REQUEST,
  payload: product,
});

export const addProductSuccess = (product: Product): ProductActionTypes => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const editProductRequest = (
  id: string,
  product: Omit<Product, 'id'>,
): ProductActionTypes => ({
  type: EDIT_PRODUCT_REQUEST,
  payload: {id, ...product},
});

export const editProductSuccess = (product: Product): ProductActionTypes => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

export const deleteProductRequest = (id: string): ProductActionTypes => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});

export const deleteProductSuccess = (id: string): ProductActionTypes => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});
