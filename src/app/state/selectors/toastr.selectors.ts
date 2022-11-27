import { createSelector } from '@ngrx/store';
import { ToastrState } from 'src/app/models/toastr-state';
import { AppState } from '../app.state';

export const selectToastrFeature = (state: AppState) => state.toastr;

export const selectToastrData = createSelector(
  selectToastrFeature,
  (state: ToastrState) => state.toastr
);

export const selectShowing = createSelector(
  selectToastrFeature,
  (state: ToastrState) => state.showing
);
