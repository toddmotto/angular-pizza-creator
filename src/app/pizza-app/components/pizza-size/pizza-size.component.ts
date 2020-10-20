import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const PIZZA_SIZE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaSizeComponent),
  multi: true,
};

@Component({
  selector: 'pizza-size',
  providers: [PIZZA_SIZE_ACCESSOR],
  styleUrls: ['pizza-size.component.scss'],
  templateUrl: './pizza-size.component.html',
})
export class PizzaSizeComponent implements ControlValueAccessor {
  private onModelChange: Function;
  private onTouch: Function;

  value: string;
  focused: string;

  sizes: any[] = [
    { type: 'large', inches: 13 },
    { type: 'medium', inches: 11 },
    { type: 'small', inches: 9 },
  ];

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
