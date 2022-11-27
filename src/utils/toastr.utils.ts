import { Store } from '@ngrx/store';
import { Toastr } from 'src/app/models/toastr';
import {
  setShowing,
  setToastrData,
} from 'src/app/state/actions/toastr.actions';
import { AppState } from 'src/app/state/app.state';

export const displayToastrMessage = (data: Toastr, store: Store<AppState>) => {
  store.dispatch(setToastrData({ tostrData: data }));
  store.dispatch(setShowing({ tostrShowing: true }));
};
