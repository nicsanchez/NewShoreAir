import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormButton } from 'src/app/models/form-button';
import { TravelformComponent } from '../../organisms/travelform/travelform.component';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent implements OnInit {
  @Input() data: FormButton = {
    callback: () => {},
    reference: new TravelformComponent(new FormBuilder()),
    text: '',
  };

  public submitMethod: Function = () => {};
  public reference = new TravelformComponent(new FormBuilder());
  public text: string = '';

  ngOnInit(): void {
    this.setComponentData();
  }

  private setComponentData() {
    this.submitMethod = this.data.callback;
    this.reference = this.data.reference;
    this.text = this.data.text;
  }
}
