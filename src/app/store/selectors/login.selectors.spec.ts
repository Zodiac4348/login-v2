import { State } from "@ngrx/store";


import * as fromLoginReducer from '../reducers/login.reducer';
import * as fromLoginSelector from './login.selectors';

describe('Login Selectors', () => {
  it('should select the isLoginSuccess property', () => {
    const currentState: fromLoginReducer.State = {
      username: 'username@example.com',
      password: '123456789',
      isLoginSuccess: true
    }
    const result = fromLoginSelector.selectLoginStatus.projector(currentState);

    expect(result).toBeTruthy();
  });
});
