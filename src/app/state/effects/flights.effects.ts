import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FlightService } from 'src/app/services/flight.service';
import { setShowing, setToastrData } from '../actions/toastr.actions';

@Injectable()
export class FligthEffects {
  loadFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Flight] Load flights'),
      mergeMap(() =>
        this.flightService.getFlights().pipe(
          map((flights) => ({
            type: '[Fligth] Set flights',
            flights,
          })),
          catchError(() =>
            of(
              setToastrData({
                tostrData: {
                  description: 'Ha ocurrido un error al obtener los vuelos.',
                  isSuccess: false,
                  title: 'Error',
                },
              }),
              setShowing({ tostrShowing: true })
            )
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private flightService: FlightService
  ) {}
}
