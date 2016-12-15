import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pizza-size',
  styleUrls: ['./pizza-size.component.scss'],
  templateUrl: './pizza-size.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PizzaSizeComponent),
    multi: true
  }]
})
export class PizzaSizeComponent implements ControlValueAccessor {
  private onModelChange: Function;
  private onTouch: Function;
  private value: string;
  private focused: string;
  private sizes: string[] = ['large', 'medium', 'small'];
  private inches: number[] = [13, 11, 9];

  public registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  public registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  public writeValue(value: string) {
    this.value = value;
  }

  private capitalise(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

  private onBlur(value: string) {
    this.focused = '';
  }

  private onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
