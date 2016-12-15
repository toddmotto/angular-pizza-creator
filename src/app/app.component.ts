import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailMatcher } from './validators/email-matcher';

export interface PizzaOrder {
  size: 'large' | 'medium' | 'small';
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private activePizza: number = 0;
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      details: this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        confirm: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', [Validators.required, Validators.minLength(3)]],
        postcode: ['', [Validators.required, Validators.minLength(3)]]
      }, { validator: emailMatcher }),
      pizzas: this.formBuilder.array([])
    });
  }

  private updateActivePizza(index: number) {
    this.activePizza = index;
  }
}
