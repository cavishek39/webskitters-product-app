export interface Product {
  id: string;
  name: string;
  price: number;
  // You can add more fields if needed, such as description, image URL, etc.
  description?: string;
  imageUrl?: string;
}

// Action Types
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

// Action Type Interfaces
interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: Product[];
}

interface AddProductRequestAction {
  type: typeof ADD_PRODUCT_REQUEST;
  payload: Omit<Product, 'id'>;
}

interface AddProductSuccessAction {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: Product;
}

interface EditProductRequestAction {
  type: typeof EDIT_PRODUCT_REQUEST;
  payload: {id: string} & Omit<Product, 'id'>;
}

interface EditProductSuccessAction {
  type: typeof EDIT_PRODUCT_SUCCESS;
  payload: Product;
}

interface DeleteProductRequestAction {
  type: typeof DELETE_PRODUCT_REQUEST;
  payload: string;
}

interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: string;
}

export type ProductState = {
  products: Product[];
};

// Union Action Type
export type ProductActionTypes =
  | SetProductsAction
  | AddProductRequestAction
  | AddProductSuccessAction
  | EditProductRequestAction
  | EditProductSuccessAction
  | DeleteProductRequestAction
  | DeleteProductSuccessAction;
