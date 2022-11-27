import { ActionReducerMap } from '@ngrx/store';
import { FlightsState } from '../models/flights-state';
import { ToastrState } from '../models/toastr-state';
import { flightsReducer } from './reducers/flights.reducers';
import { toastrReducer } from './reducers/toastr.reducers';

export interface AppState {
  toastr: ToastrState;
  flights: FlightsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  toastr: toastrReducer,
  flights: flightsReducer,
};
