import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight';
import { Toastr } from 'src/app/models/toastr';
import { TravelForm } from 'src/app/models/travel-form';
import { loadflights } from 'src/app/state/actions/flights.actions';
import { AppState } from 'src/app/state/app.state';
import { selectFlightsData } from 'src/app/state/selectors/flights.selectors';
import { displayToastrMessage } from 'src/utils/toastr.utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public total: number = 0;
  public isValid: boolean = false;
  public origin: string = '';
  public destination: string = '';
  public flights$: Observable<Flight[]> = new Observable();
  public routeFlight: Flight[] = [];
  public showFlights: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.flights$ = this.store.select(selectFlightsData);
    this.getFligths();
  }

  public emitFormData(valueEmitted: TravelForm) {
    this.isValid = valueEmitted.isValid;
    this.origin = valueEmitted.origin;
    this.destination = valueEmitted.destination;
    if (!this.isValid) {
      this.showFlights = false;
      this.setToasterMessage(
        'Error',
        valueEmitted.description,
        valueEmitted.isValid
      );
    } else {
      this.getFligths(this.origin, this.destination);
    }
  }

  private getFligths(origin: string = '', destination: string = '') {
    this.flights$.subscribe((data: Flight[]) => {
      if (data.length === 0) {
        this.store.dispatch(loadflights());
      } else {
        if (destination && origin) {
          this.routeFlight = [];
          let inicialO: Flight[] = data.filter(
            (flight) => flight.origin === origin
          );
          let inicialD: Flight[] = data.filter(
            (flight) => flight.destination === destination
          );
          let routes: string[][] = [];
          if (
            this.validateIfThereAreOriginAndDestinationInFlights(
              inicialO,
              inicialD
            )
          ) {
            inicialO.forEach((element, index) => {
              routes[index] = [element.origin];
              this.getRoute(
                data,
                element.destination,
                destination,
                routes[index]
              );
            });
            this.validateRoute(routes, data);
          }
        }
      }
    });
  }

  private getRoute(
    data: Flight[],
    origin: string,
    destination: string,
    previousOrigin: string[] = []
  ): any {
    let dataI = data.filter(
      (flight) =>
        flight.origin === origin && !previousOrigin.includes(flight.destination)
    );
    if (dataI.length > 0) {
      previousOrigin.push(origin);
      if (
        dataI.filter((flight) => flight.destination === destination).length > 0
      ) {
        previousOrigin.push(destination);
      } else {
        dataI.forEach((element) => {
          if (!previousOrigin.includes(destination)) {
            this.getRoute(
              data,
              element.destination,
              destination,
              previousOrigin
            );
          }
        });
        if (!previousOrigin.includes(destination)) {
          previousOrigin.pop();
        }
      }
    }
  }

  private validateIfThereAreOriginAndDestinationInFlights(
    inicialD: Flight[],
    inicialF: Flight[]
  ) {
    if (inicialD.length > 0 && inicialF.length > 0) {
      return true;
    } else {
      this.showFlights = false;
      this.setToasterMessage(
        'Lo Sentimos',
        'No se ha encontrado una ruta para el destino digitado.',
        false
      );
      return false;
    }
  }

  private validateRoute(routes: string[][], data: Flight[]) {
    if (routes.length > 0) {
      this.setToasterMessage(
        'Exito',
        'Se ha encontrado la siguiente ruta de viaje.',
        true
      );
      this.showFlights = true;
      this.constructFlightRoute(routes[0], data);
    } else {
      this.showFlights = false;
      this.setToasterMessage(
        'Lo Sentimos',
        'No se ha encontrado una ruta para el destino digitado.',
        false
      );
    }
  }

  private setToasterMessage(
    title: string,
    description: string,
    isSuccess: boolean
  ) {
    let data: Toastr = {
      isSuccess,
      title,
      description,
    };
    displayToastrMessage(data, this.store);
  }

  private constructFlightRoute(routes: string[], data: Flight[]) {
    let subroute: Flight;
    this.total = 0;
    for (let index = 0; index < routes.length - 1; index++) {
      subroute = data.filter(
        (flight) =>
          flight.origin === routes[index] &&
          flight.destination === routes[index + 1]
      )[0];
      this.total += subroute.price;
      this.routeFlight.push(subroute);
    }
  }
}
