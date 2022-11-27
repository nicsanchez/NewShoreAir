import { createReducer, on } from '@ngrx/store';
import { FlightsState } from 'src/app/models/flights-state';
import { loadflights, setflights } from '../actions/flights.actions';

export const initialState: FlightsState = { flights: [] };

export const flightsReducer = createReducer(
  initialState,
  on(setflights, (state, { flights }) => {
    return { ...state, flights };
  }),
  on(loadflights, (state) => {
    return state;
  })
);
