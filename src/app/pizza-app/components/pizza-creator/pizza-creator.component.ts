import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'pizza-creator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-creator.component.scss'],
  templateUrl: 'pizza-creator.component.html',
})
export class PizzaCreatorComponent {
  private visiblePizza: number = 0;

  @Input()
  pizzas: FormArray;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  get openPizza() {
    return this.visiblePizza;
  }

  set openPizza(index: number) {
    this.visiblePizza = index;
    if (~index) {
      this.toggle.emit(index);
    }
  }

  addPizza() {
    this.add.emit();
    this.openPizza = this.pizzas.length - 1;
  }

  removePizza(index: number) {
    this.remove.emit(index);
    this.openPizza = this.pizzas.length - 1;
  }

  togglePizza(index: number) {
    if (this.openPizza === index) {
      this.openPizza = -1;
      return;
    }
    this.openPizza = index;
  }
}
