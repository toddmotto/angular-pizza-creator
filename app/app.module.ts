import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PizzaAppModule } from './pizza-app/pizza-app.module';

@NgModule({
  imports: [
    BrowserModule,
    PizzaAppModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
