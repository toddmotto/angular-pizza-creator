import { AbstractControl } from '@angular/forms';

export class PizzaValidators {
  static checkEmailsMatch(control: AbstractControl) {
    const email = control.get('email');
    const confirm = control.get('confirm');
    if (!(email && confirm)) return null;
    return email.value === confirm.value ? null : { nomatch: true };
  }
}