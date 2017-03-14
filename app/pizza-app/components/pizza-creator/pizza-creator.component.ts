import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

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
        <div class="pizza-creator__header"
            (click)="toggleOpenPizza(i)">
          <i class="fa fa-fw pizza-creator__icon"
            [class.fa-chevron-down]="openPizza !== i"
            [class.fa-chevron-up]="openPizza === i"></i>
          Pizza {{ i + 1 }}

          <i class="fa fa-fw pizza-creator__status"
            [class.fa-check]="pizza.valid"
            [class.fa-times]="pizza.invalid"></i>

          <div *ngIf="pizzas.controls.length > 1"
              class="pizza-creator__delete"
              (click)="removePizza(i)">
            <i class="fa fa-trash fa-fw"></i>
          </div>
        </div>
        <div class="pizza-creator__content"
            [class.pizza-creator__content--open]="openPizza === i"
            [formGroup]="pizza">
          <h3>Select the size <span class="required">*</span></h3>
          <pizza-size formControlName="size"></pizza-size>

          <h3>Pick your toppings</h3>
          <pizza-toppings formControlName="toppings"></pizza-toppings>
        </div>
      </div>
    </div>
  `
})
export class PizzaCreatorComponent implements OnInit {
  @Input() pizzas: FormArray;
  @Output() toggle: EventEmitter<number> = new EventEmitter<number>();
  
  private _openPizza: number = 0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addPizza();
  }

  private addPizza() {
    this.pizzas.push(this.addPizzaGroup());

    this.openPizza = this.pizzas.length - 1;
  }

  private addPizzaGroup(): FormGroup {
    return this.formBuilder.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

  private get openPizza(): number {
    return this._openPizza;
  }

  private set openPizza(index: number) {
    this._openPizza = index;
    if (index > -1) {
      this.toggle.emit(index);
    }
  }

  private removePizza(index: number) {
    this.pizzas.removeAt(index);
  }

  private toggleOpenPizza(index: number) {
    if (this.openPizza === index) {
      this.openPizza = -1;
      return;
    }
    this.openPizza = index;
  }
}
