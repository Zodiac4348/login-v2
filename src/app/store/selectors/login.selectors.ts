import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loginFeatureKey, State } from '../reducers/login.reducer';

export const selectLoginFeature = createFeatureSelector<State>(
    loginFeatureKey
);

export const selectUsername = createSelector(
    selectLoginFeature,
    (state: State) => state.username
);

export const selectPassword = createSelector(
    selectLoginFeature,
    (state: State) => state.password
);