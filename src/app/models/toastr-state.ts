import { Toastr } from './toastr';

export interface ToastrState {
  showing: boolean;
  toastr: Readonly<Toastr>;
}
