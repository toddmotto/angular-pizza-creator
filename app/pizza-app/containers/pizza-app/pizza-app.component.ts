import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailMatcher } from '../../validators/email-matcher';

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
        (active)="updatePizza($event)">
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
    }, { validator: emailMatcher }),
    pizzas: this.fb.array([])
  });
  
  constructor(private fb: FormBuilder) {}

  updatePizza(index: number) {
    this.activePizza = index;
  }

}