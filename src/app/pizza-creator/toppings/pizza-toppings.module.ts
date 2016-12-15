import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { PizzaToppingsComponent } from './pizza-toppings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PizzaToppingsComponent
  ],
  exports: [
    PizzaToppingsComponent
  ]
})
export class PizzaToppingsModule {}
