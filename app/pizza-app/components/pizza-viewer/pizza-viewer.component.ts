import { Component, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
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
  template: `
    <div class="pizza-viewer">
      <div class="pizza-viewer__table-side"></div>
      <div class="pizza-viewer__table"></div>
      {{ activePizza }}
      <div 
        *ngFor="let pizza of pizzas.controls; let i = index;"
        class="pizza"
        [class.pizza--active]="activePizza === i">
        <div class="pizza__board"></div>
        <div class="pizza__base"></div>
        <div class="pizza__toppings">
          <div 
            *ngFor="let topping of pizza.value.toppings; let i = index;"
            [style.zIndex]="i"
            @drop>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
          </div>
        </div>
      </div>
    </div>
  `,
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