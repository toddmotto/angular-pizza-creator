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
  styleUrls: ['./pizza-size.component.scss'],
  template: `
    <div class="pizza-size section">
      <label *ngFor="let size of sizes; let i = index;"
          class="pizza-size__item"
          [class.pizza-size__item--active]="value === size"
          [class.pizza-size__item--focused]="focused === size">
        <input 
          type="radio"
          name="size"
          [attr.value]="size"
          (blur)="onBlur(size)"
          (change)="onChange(size)"
          (focus)="onFocus(size)"
          [checked]="value === size">

        <div class="pizza-size__plate">
          <div class="pizza-size__pizza pizza-size__pizza--{{ size }}">
            <div class="pizza-size__pizza__line"></div>
            <div class="pizza-size__pizza__line"></div>
            <div class="pizza-size__pizza__line"></div>
            <div class="pizza-size__pizza__line"></div>
          </div>
        </div>
        {{ size | titlecase }} ({{ inches[i] }}")
      </label>
    </div>
  `
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
