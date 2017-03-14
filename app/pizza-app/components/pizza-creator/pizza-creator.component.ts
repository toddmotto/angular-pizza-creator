import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'pizza-creator',
  styleUrls: ['./pizza-creator.component.scss'],
  template: `
    <div class="pizza-creator">

      <h2>
        Choose your pizzas
        <button class="button" type="button" (click)="addPizza()">
          <i class="fa fa-plus"></i>
          Add another pizza
        </button>
      </h2>

      <div *ngFor="let pizza of pizzas.controls; let i = index;">
        <div class="pizza-creator__header" (click)="togglePizza(i)">
          
          <i 
            class="fa fa-fw pizza-creator__icon"
            [class.fa-chevron-down]="openPizza !== i"
            [class.fa-chevron-up]="openPizza === i"></i>
          Pizza {{ i + 1 }}

          <i 
            class="fa fa-fw pizza-creator__status"
            [class.fa-check]="pizza.valid"
            [class.fa-times]="pizza.invalid"></i>

          <div 
            class="pizza-creator__delete"
            *ngIf="pizzas.controls.length > 1"
            (click)="removePizza(i)">
            <i class="fa fa-trash fa-fw"></i>
          </div>

        </div>

        <div 
          class="pizza-creator__content"
          [class.pizza-creator__content--open]="openPizza === i"
          [formGroup]="pizza">

          <h3>Select the size <span class="required">*</span></h3>
          <pizza-size 
            formControlName="size">
          </pizza-size>

          <h3>Pick your toppings</h3>
          <pizza-toppings 
            formControlName="toppings">
          </pizza-toppings>
        </div>

      </div>
    </div>
  `
})
export class PizzaCreatorComponent {

  _openPizza: number = 0;

  @Input()
  pizzas: FormArray;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  get openPizza() {
    return this._openPizza;
  }

  set openPizza(index: number) {
    this._openPizza = index;
    if (index > -1) {
      this.toggle.emit(index);
    }
  }

  addPizza() {
    this.add.emit();
    this.openPizza = this.pizzas.length - 1;
  }

  removePizza(index: number) {
    this.remove.emit(index);
  }
  
  togglePizza(index: number) {
    if (this.openPizza === index) {
      this.openPizza = -1;
      return;
    }
    this.openPizza = index;
  }
}
