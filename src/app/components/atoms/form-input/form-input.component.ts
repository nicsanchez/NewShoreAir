import { Component, Input, OnInit, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true,
};

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
})
export class FormInputComponent implements OnInit, ControlValueAccessor {
  @Input() data: any;
  @Input() controlName: string = '';
  @Input() errors: any;
  @Input() touched: boolean = false;
  public title: string = 'Origen';
  public description: string = 'Ingrese el origen el viaje';
  public iconClass: string = 'form-input__icon--pin';
  public value: string = '';
  private onChange = (_: any) => {};
  private onTouch = () => {};

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    this.iconClass = this.data.iconClass;
    this.errors = this.data.errors;
  }
  onInput(value: string) {
    this.value = value.toUpperCase();
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onClicked() {
    this.onTouch();
  }
}
