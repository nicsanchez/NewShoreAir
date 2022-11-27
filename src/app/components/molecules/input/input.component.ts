import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Input as CustomInput } from 'src/app/models/input';

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
  @Input() data: CustomInput = {
    title: '',
    placeholder: '',
    iconClass: '',
  };
  @Input() errors: any;
  @Input() touched: boolean = false;
  @Input() isValid: boolean = false;

  public value: string = '';

  private onChange: Function = () => {};
  private onTouch: Function = () => {};

  onInput(value: string) {
    this.value = value.toUpperCase();
    this.onTouch();
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  onClicked() {
    this.onTouch();
  }
}
