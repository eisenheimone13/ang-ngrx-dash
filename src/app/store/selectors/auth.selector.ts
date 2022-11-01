import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../state/auth.state';

export const authFeature = createFeatureSelector<AuthState>('auth');

export const selectUserData = createSelector(
  authFeature,
  (state) => state.user
);
