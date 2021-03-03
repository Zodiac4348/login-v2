import { Action, createReducer, on } from '@ngrx/store';
import * as fromLoginActions from '../actions/login.actions';

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

// export const initialState: LoginDetails[] = [];

// export const initialState: LoginDetails = {
//   username: null,
//   password: null
// };


export const reducer = createReducer(
  initialState,
  on(fromLoginActions.addLogin, (state, action) => {
    // return [
    //   ...state,
    //   action.data
    // ]
    return {
      ...state,
      username: action.data.username, 
      password: action.data.password
    }
  }),
  on(fromLoginActions.sendLoginStatus, (state, action) => {
    // return [
    //   ...state,
    //   action.data
    // ]
    return {
      ...state,
      isLoginSuccess: action.isLoginSuccess
    }
  })
);

