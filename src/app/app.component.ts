import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Toastr } from './models/toastr';
import {
  selectShowing,
  selectToastrData,
} from './state/selectors/toastr.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NewShoreAir';
  showing$: Observable<boolean> = new Observable();
  tostrData$: Observable<Toastr> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.showing$ = this.store.select(selectShowing);
    this.tostrData$ = this.store.select(selectToastrData);
  }
}
