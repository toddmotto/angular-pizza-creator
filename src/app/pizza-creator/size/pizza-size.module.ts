import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaSizeComponent } from './pizza-size.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PizzaSizeComponent
  ],
  exports: [
    PizzaSizeComponent
  ]
})
export class PizzaSizeModule {}
