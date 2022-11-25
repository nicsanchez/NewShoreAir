import { Component, Input, OnInit } from '@angular/core';
import { Input as CustomInput } from 'src/app/models/input';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() data: CustomInput = {
    title: '',
    placeholder: '',
    iconClass: '',
  };
  @Input() value: string = '';
  @Input() isValid: boolean = false;

  public title: string = '';
  public placeholder: string = '';
  public iconClass: string = '';

  ngOnInit(): void {
    this.setComponentData();
  }

  onInput(value: string) {
    this.value = value.toUpperCase();
  }

  private setComponentData() {
    this.title = this.data.title;
    this.placeholder = this.data.placeholder;
    this.iconClass = this.data.iconClass;
  }
}
