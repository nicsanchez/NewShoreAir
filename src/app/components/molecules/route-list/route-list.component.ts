import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss'],
})
export class RouteListComponent {
  @Input() flights: Flight[] = [];
}
