import { createAction, props } from '@ngrx/store';
import { LoginDetails } from '../../models/login-details.model';

export const addLogin = createAction(
  '[LOGIN COMPONENT] Add Login',
  props<{ data: LoginDetails }>()
);

export const resetLogin = createAction(
  '[HOME COMPONENT] Reset Login'
);

export const sendLoginStatus = createAction(
  '[LOGIN EFFECT] Send Login Status',
  props<{ isLoginSuccess: boolean }>()
);
