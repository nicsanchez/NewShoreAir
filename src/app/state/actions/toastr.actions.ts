import { createAction, props } from '@ngrx/store';
import { Toastr } from 'src/app/models/toastr';

export const setShowing = createAction(
  '[Toastr] Set Tostr Showing',
  props<{ tostrShowing: boolean }>()
);

export const setToastrData = createAction(
  '[Toastr] Set Tostr Data',
  props<{ tostrData: Toastr }>()
);
