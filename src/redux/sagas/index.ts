import {all, fork} from 'redux-saga/effects';
import {watchAuth} from './authSagas';
import watchProducts from './productSagas';

export default function* rootSaga() {
  yield all([fork(watchAuth), fork(watchProducts)]);
}
