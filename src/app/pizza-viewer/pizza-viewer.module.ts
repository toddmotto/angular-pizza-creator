import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PizzaViewerComponent } from './pizza-viewer.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    PizzaViewerComponent
  ],
  exports: [
    PizzaViewerComponent
  ]
})
export class PizzaViewerModule {}
