import { createReducer, on } from '@ngrx/store';
import * as fromLoginAction from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {
  username: string;
  password: string;
  isLoginSuccess: boolean | null;
}

export const initialState: State = {
  username: null,
  password: null,
  isLoginSuccess: null
};

export const reducer = createReducer(
  initialState,
  on(fromLoginAction.addLogin, (state, action) => {
    return {
      ...state,
      username: action.data.username, 
      password: action.data.password
    }
  }),
  on(fromLoginAction.resetLogin, (state) => {
    return {
      ...state,
      username: null,
      password: null,
      isLoginSuccess: null
    }
  }),
  on(fromLoginAction.sendLoginStatus, (state, action) => {
    return {
      ...state,
      isLoginSuccess: action.isLoginSuccess
    }
  })
);

