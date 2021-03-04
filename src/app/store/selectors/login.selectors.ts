import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loginFeatureKey, State } from '../reducers/login.reducer';

export const selectLoginFeature = createFeatureSelector<State>(
    loginFeatureKey
);

export const selectLoginStatus = createSelector(
    selectLoginFeature,
    (state: State) => state.isLoginSuccess
);