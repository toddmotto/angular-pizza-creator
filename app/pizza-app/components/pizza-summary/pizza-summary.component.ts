import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-summary.component.scss'],
  template: `
    <div class="pizza-summary">

      <h2>Order Summary</h2>
      <div 
        class="pizza-summary__pizza"
        *ngFor="let pizza of parent.get('pizzas').value">

        <div *ngIf="pizza.size">
          <h3>
            {{ pizza.size | titlecase }} Pizza
            <span class="pizza-summary__price">
              {{ prices[pizza.size].base | currency:'USD':true }}
            </span>
          </h3>

          <div class="pizza-summary__toppings">
            <div 
              class="pizza-summary__topping"
              *ngFor="let topping of pizza.toppings">
              <i class="fa fa-plus"></i>
              {{ topping | titlecase }}
              <span class="pizza-summary__price">
                {{ prices[pizza.size].toppings | currency:'USD':true }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="pizza-summary__total-price">
        Total: {{ total | currency:'USD':true }}
      </div>

      <button 
        type="submit" 
        class="pizza-summary__button"
        [disabled]="parent.invalid">
        Place order
      </button>
    </div>

  `
})
export class PizzaSummaryComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;
}
