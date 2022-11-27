import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Toastr } from './models/toastr';
import { setShowing } from './state/actions/toastr.actions';
import { AppState } from './state/app.state';
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
  public title = 'NewShoreAir';
  public showing$: Observable<boolean> = new Observable();
  public tostrData$: Observable<Toastr> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showing$ = this.store.select(selectShowing);
    this.tostrData$ = this.store.select(selectToastrData);
    this.listenShowingChange();
  }

  private listenShowingChange() {
    this.showing$.subscribe((data: boolean) => {
      if (data) {
        setTimeout(() => {
          this.store.dispatch(setShowing({ tostrShowing: false }));
        }, 2000);
      }
    });
  }
}
