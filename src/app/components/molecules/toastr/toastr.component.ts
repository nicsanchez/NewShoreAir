import { Component, Input } from '@angular/core';
import { Toastr } from 'src/app/models/toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent {
  @Input() toastrData: Toastr = {
    title: '',
    description: '',
    isSuccess: false,
  };
  @Input() show: boolean = true;
}
