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
  selector: 'summary',
  styleUrls: ['./summary.component.scss'],
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  @Input()
  private order: FormGroup;
  private prices: Prices = SIZE_PRICES;

  private capitalise(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getPrice(): string {
    let price: number = 0;

    this.order.value.pizzas.forEach((pizza: Pizza) => {
      price += this.prices[pizza.size].base;
      price += this.prices[pizza.size].toppings * pizza.toppings.length;
    });

    return price.toFixed(2);
  }
}
