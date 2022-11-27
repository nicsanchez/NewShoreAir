import { createReducer, on } from '@ngrx/store';
import { ToastrState } from 'src/app/models/toastr-state';
import { setShowing, setToastrData } from '../actions/toastr.actions';

export const initialState: ToastrState = {
  showing: false,
  toastr: { title: '', description: '', isSuccess: false },
};

export const toastrReducer = createReducer(
  initialState,
  on(setToastrData, (state, { tostrData }) => {
    return { ...state, toastr: tostrData };
  }),
  on(setShowing, (state, { tostrShowing }) => {
    return { ...state, showing: tostrShowing };
  })
);
