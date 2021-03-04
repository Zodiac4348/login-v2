import { reducer, initialState } from './login.reducer';
import * as fromLoginReducer from './login.reducer';
import * as fromLoginAction from '../actions/login.actions';

describe('Login Reducer', () => {
  describe('an unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromLoginReducer;
      const action = { type: 'unknown '};
      const state = fromLoginReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });
  
  describe('addLogin action', () => {
    it('should update the state', () => {
      const { initialState } = fromLoginReducer;
      const newState: fromLoginReducer.State = {
        username: 'username@example.com',
        password: '123456789',
        isLoginSuccess: null
      }
      const action = fromLoginAction.addLogin({data: newState});
      const state = fromLoginReducer.reducer(newState, action);

      expect(state).toEqual(newState); // has the property
      expect(state).not.toBe(newState); // not the same reference or object
    });
  });
  
  describe('resetLogin action', () => {
    it('should reset the state to its initial state', () => {
      const { initialState } = fromLoginReducer;
      const currentState: fromLoginReducer.State = {
        username: 'username@example.com',
        password: '123456789',
        isLoginSuccess: true
      }

      const expectedState: fromLoginReducer.State = {
        username: null,
        password: null,
        isLoginSuccess: null
      }

      const action = fromLoginAction.resetLogin();
      const state = fromLoginReducer.reducer(currentState, action);

      expect(state).toEqual(expectedState);
    });
  });
  
  describe('sendLoginStatus action', () => {
    it('should update the isLoginSuccess property in the state', () => {
      const { initialState } = fromLoginReducer;
      const action = fromLoginAction.sendLoginStatus({ isLoginSuccess: true });
      const state = fromLoginReducer.reducer(initialState, action);

      expect(state.isLoginSuccess).toBeTruthy();
    });
  });
});
