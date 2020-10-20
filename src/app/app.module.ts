import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaAppModule } from './pizza-app/pizza-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PizzaAppModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
