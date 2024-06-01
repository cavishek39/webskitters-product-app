// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action Type Interfaces
interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

interface SignupRequestAction {
  type: typeof SIGNUP_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: any;
}

interface SignupFailureAction {
  type: typeof SIGNUP_FAILURE;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

// Union Action Type
export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction
  | LogoutAction;

// State Type
export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  error: string | null;
}
