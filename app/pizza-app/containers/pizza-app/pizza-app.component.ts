import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PizzaValidators } from '../../validators/pizza.validator';

export interface PizzaOrder {
  size: 'large' | 'medium' | 'small';
}

@Component({
  selector: 'pizza-app',
  styleUrls: ['./pizza-app.component.scss'],
  template: `
    <div class="pizza-app">

      <pizza-viewer 
        [pizzas]="form.get('pizzas')"
        [activePizza]="activePizza">
      </pizza-viewer>

      <pizza-form
        [parent]="form"
        (add)="addPizza()"
        (remove)="removePizza($event)"
        (toggle)="togglePizza($event)"
        (submit)="createOrder($event)">
      </pizza-form>

    </div>
  `
})
export class PizzaAppComponent {

  activePizza = 0;

  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.minLength(3)]]
    }, { validator: PizzaValidators.checkEmailExists }),
    pizzas: this.fb.array([
      this.createPizza()
    ])
  });

  constructor(private fb: FormBuilder) {}

  createPizza() {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

  addPizza() {
    const control = this.form.get('pizzas') as FormArray;
    control.push(this.createPizza());
  }

  removePizza(index: number) {
    const control = this.form.get('pizzas') as FormArray;
    control.removeAt(index);
  }

  togglePizza(index: number) {
    this.activePizza = index;
  }

  createOrder(order: FormGroup) {
    console.log(order.value);
  }

}
