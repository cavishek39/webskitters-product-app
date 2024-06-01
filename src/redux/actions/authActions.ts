import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  AuthActionTypes,
} from '../types/authTypes';

export const loginRequest = (
  email: string,
  password: string,
): AuthActionTypes => ({
  type: LOGIN_REQUEST,
  payload: {email, password},
});

export const loginSuccess = (user: any): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = (
  email: string,
  password: string,
): AuthActionTypes => ({
  type: SIGNUP_REQUEST,
  payload: {email, password},
});

export const signupSuccess = (user: any): AuthActionTypes => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error: string): AuthActionTypes => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});
