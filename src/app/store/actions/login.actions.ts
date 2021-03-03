import { createAction, props } from '@ngrx/store';
import { LoginDetails } from '../../models/login-details.model';

export const loadLogins = createAction(
  '[LOGIN COMPONENT] Load Logins'
);

export const loadLoginsSuccess = createAction(
  '[LOGIN COMPONENT] Load Logins Success',
  props<{ data: any }>()
);

export const loadLoginsFailure = createAction(
  '[LOGIN COMPONENT] Load Logins Failure',
  props<{ error: any }>()
);

export const addLogin = createAction(
  '[LOGIN COMPONENT] Add Login',
  props<{ data: LoginDetails }>()
);

export const sendLoginStatus = createAction(
  '[LOGIN COMPONENT] Send Login Status',
  props<{ isLoginSuccess: boolean }>()
);
