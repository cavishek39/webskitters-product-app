import {call, put, takeLatest} from 'redux-saga/effects';
import {
  ADD_PRODUCT_REQUEST,
  EDIT_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  ProductActionTypes,
} from '../types/productTypes';
import {
  addProductSuccess,
  editProductSuccess,
  deleteProductSuccess,
  setProducts,
} from '../actions/productActions';
import {storage} from '../../../firebase';

// Firestore collection reference
const productsCollection = storage.collection('products');

// Worker Saga: Will be fired on ADD_PRODUCT_REQUEST action
function* addProduct(action: ProductActionTypes) {
  try {
    const newProductRef = productsCollection.doc();
    const newProduct = {...action.payload, id: newProductRef.id};
    yield call([newProductRef, 'set'], newProduct);
    yield put(addProductSuccess(newProduct));
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

// Worker Saga: Will be fired on EDIT_PRODUCT_REQUEST action
function* editProduct(action: ProductActionTypes) {
  try {
    const {id, ...productData} = action.payload;
    yield call([productsCollection.doc(id), 'update'], productData);
    yield put(editProductSuccess({id, ...productData}));
  } catch (error) {
    console.error('Error editing product:', error);
  }
}

// Worker Saga: Will be fired on DELETE_PRODUCT_REQUEST action
function* deleteProduct(action: ProductActionTypes) {
  try {
    yield call([productsCollection.doc(action?.payload), 'delete']);
    yield put(deleteProductSuccess(action?.payload));
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

// Worker Saga: Will be fired on application start to fetch products
function* fetchProducts() {
  try {
    const snapshot = yield call([productsCollection, 'get']);
    const products = snapshot.docs.map(doc => doc.data());
    yield put(setProducts(products));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Watcher Saga: Spawns a new worker saga on each action
function* productSaga() {
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
  yield takeLatest(EDIT_PRODUCT_REQUEST, editProduct);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
  yield call(fetchProducts); // Fetch products on startup
}

export default productSaga;
