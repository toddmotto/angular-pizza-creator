import { AbstractControl } from '@angular/forms';

export const emailMatcher = (control: AbstractControl): {[key: string]: boolean} => {
  const email = control.get('email');
  const confirm = control.get('confirm');
  if (!email || !confirm) {
    return null;
  }
  return email.value === confirm.value ? null : { nomatch: true };
};