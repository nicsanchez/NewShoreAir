import { ActionReducerMap } from '@ngrx/store';
import { ToastrState } from '../models/toastr-state';
import { toastrReducer } from './reducers/toastr.reducers';

export interface AppState {
  toastr: ToastrState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  toastr: toastrReducer,
};
