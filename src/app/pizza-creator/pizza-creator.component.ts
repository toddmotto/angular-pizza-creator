import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-creator',
  styleUrls: ['./pizza-creator.component.scss'],
  templateUrl: './pizza-creator.component.html'
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
