import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toastr-title',
  templateUrl: './toastr-title.component.html',
  styleUrls: ['./toastr-title.component.scss'],
})
export class ToastrTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
