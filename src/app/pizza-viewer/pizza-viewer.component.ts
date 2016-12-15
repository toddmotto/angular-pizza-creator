import { Component, Input, transition, style, animate, trigger } from '@angular/core';
import { FormArray } from "@angular/forms";

export interface Toppings {
  anchovy?: number;
  bacon?: number;
  basil?: number;
  chili?: number;
  mozzarella?: number;
  mushroom?: number;
  olive?: number;
  onion?: number;
  pepper?: number;
  pepperoni?: number;
  sweetcorn?: number;
  tomato?: number;
}

@Component({
  selector: 'pizza-viewer',
  styleUrls: ['./pizza-viewer.component.scss'],
  templateUrl: './pizza-viewer.component.html',
  animations: [
    trigger(
      'drop', [
        transition(':enter', [
          style({transform: 'translateY(-200px)', opacity: 0}),
          animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', 'opacity': 1}),
          animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({transform: 'translateY(-200px)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class PizzaViewerComponent {
  public toppings: Toppings = {};
  @Input() pizzas: FormArray;
  @Input() activePizza: number = 0;
}