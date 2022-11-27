import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-route-item',
  templateUrl: './route-item.component.html',
  styleUrls: ['./route-item.component.scss'],
})
export class RouteItemComponent {
  @Input() flight: Flight = {
    origin: '',
    destination: '',
    price: 0,
    transport: {
      flightCarrier: '',
      flightNumber: '',
    },
  };
}
