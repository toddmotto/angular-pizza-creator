import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const PIZZA_SIZE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaSizeComponent),
  multi: true
};

@Component({
  selector: 'pizza-size',
  providers: [PIZZA_SIZE_ACCESSOR],
  styleUrls: ['pizza-size.component.scss'],
  template: `
    <div class="pizza-size section">
      <label *ngFor="let size of sizes; let i = index;"
          class="pizza-size__item"
          [class.pizza-size__item--active]="value === size.type"
          [class.pizza-size__item--focused]="focused === size.type">
        <input 
          type="radio"
          name="size"
          [attr.value]="size.type"
          (blur)="onBlur(size.type)"
          (change)="onChange(size.type)"
          (focus)="onFocus(size.type)"
          [checked]="value === size.type">

        <div class="pizza-size__plate">
          <div class="pizza-size__pizza pizza-size__pizza--{{ size.type }}">
            <div class="pizza-size__pizza__line"></div>
            <div class="pizza-size__pizza__line"></div>
            <div class="pizza-size__pizza__line"></div>
            <div class="pizza-size__pizza__line"></div>
          </div>
        </div>
        {{ size.type | titlecase }} ({{ size.inches }}")
      </label>
    </div>
  `
})
export class PizzaSizeComponent implements ControlValueAccessor {
  
  private onModelChange: Function;
  private onTouch: Function;
  
  value: string;
  focused: string;
  
  sizes: any[] = [
    { type: 'large', inches: 13 },
    { type: 'medium', inches: 11 },
    { type: 'small', inches: 9 }
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
