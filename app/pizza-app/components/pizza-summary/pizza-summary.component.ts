import { Component, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

interface Price {
  base: number;
  toppings: number;
}

interface Prices {
  small: Price;
  medium: Price;
  large: Price;
}

const SIZE_PRICES: Prices = {
  small: {
    base: 9.99,
    toppings: 0.69
  },
  medium: {
    base: 12.99,
    toppings: 0.99
  },
  large: {
    base: 16.99,
    toppings: 1.29
  }
};

interface Pizza {
  size: 'large' | 'medium' | 'small';
  toppings: string[]
}

@Component({
  selector: 'pizza-summary',
  styleUrls: ['pizza-summary.component.scss'],
  template: `
    <div class="pizza-summary">
      <h2>Order Summary</h2>
      <div *ngFor="let pizza of order.value.pizzas"
          class="pizza-summary__pizza">
        <div *ngIf="pizza.size">
          <h3>
            {{ pizza.size | titlecase }} Pizza

            <span class="pizza-summary__price">
              £{{ prices[pizza.size].base }}
            </span>
          </h3>

          <div class="pizza-summary__toppings">
            <div *ngFor="let topping of pizza.toppings"
                class="pizza-summary__topping">
              <i class="fa fa-plus"></i> {{ topping | titlecase }}
              <span class="pizza-summary__price">
                {{ prices[pizza.size].toppings }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="pizza-summary__total-price">
        £{{ getPrice() }}
      </div>

      <button type="submit" class="pizza-summary__button" [disabled]="order.invalid">
        Place order
      </button>
    </div>

  `
})
export class PizzaSummaryComponent {
  @Input()
  private order: FormGroup;
  private prices: Prices = SIZE_PRICES;

  private getPrice(): string {
    let price: number = 0;

    this.order.value.pizzas.forEach((pizza: Pizza) => {
      price += this.prices[pizza.size].base;
      price += this.prices[pizza.size].toppings * pizza.toppings.length;
    });

    return price.toFixed(2);
  }
}
