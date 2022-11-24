import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  @Input() data: any;
  @Input() errors: any;
  @Input() touched: boolean = false;
  @Input() isValid: boolean = false;

  public value: string = '';

  private onChange = (_: any) => {};
  private onTouch = () => {};

  onInput(value: string) {
    this.value = value.toUpperCase();
    this.onTouch();
    this.onChange(value);
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
