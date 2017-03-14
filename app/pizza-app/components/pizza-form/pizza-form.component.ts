import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-form.component.scss'],
  template: `
    <form (ngSubmit)="onSubmit($event)" [formGroup]="parent">
    
      <h2>Enter your details</h2>
      <div class="section" formGroupName="details">
        <div class="input">
          <label>
            Name <span class="required">*</span>
            <span *ngIf="parent.get('details').get('name').hasError('required') && parent.get('details').get('name').touched"
                  class="error">
              Field is required
            </span>
          </label>
          <input formControlName="name" type="text" placeholder="John Smith">
        </div>
        <div class="input">
          <label>
            Email <span class="required">*</span>
            <span *ngIf="parent.get('details').get('email').errors && parent.get('details').get('email').touched"
                  class="error">
              Field is required
            </span>
          </label>
          <input formControlName="email" type="email" placeholder="Enter your email">
        </div>
        <div class="input">
          <label>
            Confirm <span class="required">*</span>
            <span *ngIf="parent.get('details').get('confirm').errors && parent.get('details').get('confirm').touched"
                  class="error">
              <span *ngIf="parent.get('details').get('confirm').hasError('required')">
                Field is required
              </span>
            </span>
            <span class="error" *ngIf="!parent.get('details').get('confirm').hasError('required') && parent.get('details').touched && parent.get('details').hasError('nomatch')">
              Emails must match
            </span>
          </label>
          <input formControlName="confirm" type="email" placeholder="Confirm your email">
        </div>
      </div>
      <div class="section" formGroupName="details">
        <div class="input">
          <label>
            Address <span class="required">*</span>
            <span *ngIf="parent.get('details').get('address').errors && parent.get('details').get('address').touched"
                  class="error">
              <span *ngIf="parent.get('details').get('address').hasError('required')">
                Field is required
              </span>
              <span *ngIf="parent.get('details').get('address').hasError('minlength')">
                Min of 3 characters
              </span>
            </span>
          </label>
          <input formControlName="address" type="text" placeholder="44 Pizza Street">
        </div>
        <div class="input">
          <label>
            Postcode <span class="required">*</span>
            <span *ngIf="parent.get('details').get('postcode').errors && parent.get('details').get('postcode').touched"
                  class="error">
              <span *ngIf="parent.get('details').get('postcode').hasError('required')">
                Field is required
              </span>
              <span *ngIf="parent.get('details').get('postcode').hasError('minlength')">
                Min of 3 characters
              </span>
            </span>
          </label>
          <input formControlName="postcode" type="text" placeholder="PI3 3AS">
        </div>
        <div class="input">
          <label>
            Contact Number <span class="required">*</span>
            <span *ngIf="parent.get('details').get('phone').errors && parent.get('details').get('phone').touched"
                  class="error">
              Field is required
            </span>
          </label>
          <input formControlName="phone" type="text" placeholder="01234 567 890">
        </div>
      </div>

      <pizza-creator 
        [pizzas]="parent.get('pizzas')"
        (add)="onAddPizza($event)"
        (remove)="onRemovePizza($event)"
        (toggle)="onToggle($event)">
      </pizza-creator>

      <pizza-summary 
        [parent]="parent"
        [prices]="prices"
        [total]="total">
      </pizza-summary>

    </form>
  `
})
export class PizzaFormComponent {
  
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  submit = new EventEmitter<any>();

  onAddPizza(event) {
    this.add.emit(event);
  }

  onRemovePizza(event) {
    this.remove.emit(event);
  }

  onToggle(event) {
    this.toggle.emit(event);
  }

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }

}
