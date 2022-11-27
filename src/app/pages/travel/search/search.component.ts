import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Flight } from 'src/app/models/flight';
import { Journey } from 'src/app/models/journey';
import { Toastr } from 'src/app/models/toastr';
import { TravelForm } from 'src/app/models/travel-form';
import { FlightService } from 'src/app/services/flight.service';
import {
  setShowing,
  setToastrData,
} from 'src/app/state/actions/toastr.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public total: number = 0;
  public isValid: boolean = false;
  public flights: Flight[] = [
    {
      origin: 'MZL',
      destination: 'MDE',
      price: 200,
      transport: {
        flightCarrier: 'CO',
        flightNumber: '8001',
      },
    },
    {
      origin: 'MZL',
      destination: 'MDE',
      price: 600,
      transport: {
        flightCarrier: 'CO',
        flightNumber: '8001',
      },
    },
  ];

  constructor(
    private store: Store<any>,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    this.getFligths();
  }

  public emitFormData(valueEmitted: TravelForm) {
    this.isValid = valueEmitted.isValid;
    let data: Toastr = {
      isSuccess: valueEmitted.isValid,
      title: this.isValid ? 'Exito' : 'Error',
      description: valueEmitted.description,
    };
    this.showToasterData(data);
  }

  private showToasterData(data: Toastr) {
    this.store.dispatch(setToastrData({ tostrData: data }));
    this.store.dispatch(setShowing({ tostrShowing: true }));
    setTimeout(() => {
      this.store.dispatch(setShowing({ tostrShowing: false }));
    }, 2000);
  }

  private getFligths() {
    this.flightService.getFlights().subscribe(
      (response: any) => {
        console.log(response);
      },
      () => {
        let data: Toastr = {
          isSuccess: false,
          title: 'Error',
          description: 'Ha ocurrido un error al consultar los vuelos.',
        };
        this.showToasterData(data);
      }
    );
  }
}
