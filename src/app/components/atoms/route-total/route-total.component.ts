import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-total',
  templateUrl: './route-total.component.html',
  styleUrls: ['./route-total.component.scss'],
})
export class RouteTotalComponent {
  @Input() total: number = 0;
}
