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
  templateUrl: './pizza-toppings.component.html',
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
