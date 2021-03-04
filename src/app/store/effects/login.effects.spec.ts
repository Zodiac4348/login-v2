import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoginEffects } from './login.effects';
import * as fromLoginReducer from '../../store/reducers/login.reducer';
import * as fromLoginAction from '../../store/actions/login.actions';
import { LoginService } from 'src/app/services/login/login.service';
import { AppState } from 'src/app/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';
import { LoginDetails } from 'src/app/models/login-details.model';

describe('LoginEffects', () => {
  let actions$: Observable<any>;
  let effects: LoginEffects;
  let store: MockStore<AppState>;
  let testScheduler: TestScheduler;
  let loginService: LoginService;

  const initialState: fromLoginReducer.State = {
    username: null,
    password: null,
    isLoginSuccess: null
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        LoginService
      ]
    });

    loginService = TestBed.get(LoginService);
    effects = TestBed.inject(LoginEffects);
    store = TestBed.inject(MockStore);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should handle addLogin and return a sendLoginStatus action', () => {
    const loginDetails: LoginDetails = {
      username: 'username@example.com',
      password: '123456789'
    };
    const action = fromLoginAction.addLogin({ data: loginDetails });
    const result = fromLoginAction.sendLoginStatus({ isLoginSuccess: true });

    testScheduler.run(({hot, cold, expectObservable}) => {
      actions$ = hot('-a', { a: action });
      const response = cold('-b', { b: true });
      spyOn(loginService, 'submit').and.returnValue(response);

      expectObservable(effects.submit$).toBe('--b', { b: result });
    });
  });

});
