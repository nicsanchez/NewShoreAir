import { createSelector } from '@ngrx/store';
import { FlightsState } from 'src/app/models/flights-state';
import { AppState } from '../app.state';

export const selectFlightsFeature = (state: AppState) => state.flights;

export const selectFlightsData = createSelector(
  selectFlightsFeature,
  (state: FlightsState) => state.flights
);
