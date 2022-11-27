import { createAction, props } from '@ngrx/store';
import { Flight } from 'src/app/models/flight';

export const loadflights = createAction('[Flight] Load flights');

export const setflights = createAction(
  '[Fligth] Set flights',
  props<{ flights: Flight[] }>()
);
