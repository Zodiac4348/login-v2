import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLogin from './reducers/login.reducer';
import { State } from './reducers/login.reducer';


export interface AppState {

  [fromLogin.loginFeatureKey]: State;
  // [fromLogin.loginFeatureKey]: LoginDetails[];
}

export const reducers: ActionReducerMap<AppState> = {

  [fromLogin.loginFeatureKey]: fromLogin.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
