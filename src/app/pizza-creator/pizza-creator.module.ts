import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PizzaCreatorComponent } from './pizza-creator.component';
import { PizzaSizeModule } from "./size/pizza-size.module";
import { PizzaToppingsModule } from "./toppings/pizza-toppings.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PizzaSizeModule,
    PizzaToppingsModule
  ],
  declarations: [
    PizzaCreatorComponent
  ],
  exports: [
    PizzaCreatorComponent
  ]
})
export class PizzaCreatorModule {}
