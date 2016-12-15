import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaViewerModule } from "./pizza-viewer/pizza-viewer.module";
import { SummaryModule } from './summary/summary.module';
import { PizzaCreatorModule } from "./pizza-creator/pizza-creator.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PizzaViewerModule,
    PizzaCreatorModule,
    SummaryModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
