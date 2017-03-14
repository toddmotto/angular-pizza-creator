import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TOPPINGS: string[] = [
  'anchovy',
  'bacon',
  'basil',
  'chili',
  'mozzarella',
  'mushroom',
  'olive',
  'onion',
  'pepper',
  'pepperoni',
  'sweetcorn',
  'tomato'
];

@Component({
  selector: 'pizza-toppings',
  styleUrls: ['./pizza-toppings.component.scss'],
  template: `
    <div class="pizza-toppings">
      <label 
        *ngFor="let topping of toppings"
        class="pizza-topping"
        [class.pizza-topping--active]="value.includes(topping)"
        [class.pizza-topping--focused]="focused === topping">
        <input 
          type="checkbox"
          [attr.name]="topping"
          [attr.value]="topping"
          (blur)="onBlur(topping)"
          (change)="updateTopping(topping)"
          (focus)="onFocus(topping)"
          [checked]="value.includes(topping)">
        <span class="pizza-topping__icon pizza-topping__icon--{{ topping }}"></span>
        {{ capitalise(topping) }}
      </label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaToppingsComponent),
      multi: true
    }
  ]
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  public toppings: string[] = TOPPINGS;

  private onModelChange: Function;
  private onTouch: Function;
  private value: string[] = [];
  private focused: string;

  public registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  public registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  public writeValue(toppings: string[]) {
    this.value = toppings;
  }

  private capitalise(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private updateTopping(topping: string) {
    if (this.value['includes'](topping)) {
      this.value = this.value.filter((x: string) => topping !== x);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  private onBlur(value: string) {
    this.focused = '';
  }

  private onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
