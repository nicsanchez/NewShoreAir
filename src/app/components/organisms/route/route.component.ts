import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent {
  public title: string = 'Ruta de Viaje';
  @Input() total: number = 0;
  @Input() flights: Flight[] = [];
}
