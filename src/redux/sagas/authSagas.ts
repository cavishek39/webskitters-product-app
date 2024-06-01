import {call, put, takeEvery} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../types/authTypes';
import {auth} from '../../../firebase';

function* loginSaga(action: any) {
  try {
    const userCredential = call(
      auth.signInWithEmailAndPassword,
      action.payload.email,
      action.payload.password,
    );
    console.log('userCredential', userCredential);
    yield put({type: LOGIN_SUCCESS, payload: userCredential.payload});
  } catch (error) {
    yield put({type: LOGIN_FAILURE, payload: error.message});
  }
}

function* signupSaga(action: any) {
  try {
    const userCredential = call(
      auth.createUserWithEmailAndPassword,
      action.payload.email,
      action.payload.password,
    );
    console.log('userCredential', userCredential);
    yield put({type: SIGNUP_SUCCESS, payload: userCredential.payload});
  } catch (error) {
    yield put({type: SIGNUP_FAILURE, payload: (error as Error).message});
  }
}

export function* watchAuth() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
  yield takeEvery(SIGNUP_REQUEST, signupSaga);
}
