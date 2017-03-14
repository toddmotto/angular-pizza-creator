import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true
};

@Component({
  selector: 'pizza-toppings',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  styleUrls: ['pizza-toppings.component.scss'],
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
        {{ topping | titlecase }}
      </label>
    </div>
  `
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  
  toppings = [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
  ];

  value: string[] = [];
  focused: string;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  updateTopping(topping: string) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((x: string) => topping !== x);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  onBlur(value: string) {
    this.focused = '';
  }

  onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
