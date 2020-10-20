import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-summary.component.scss'],
  templateUrl: 'pizza-summary.component.html',
})
export class PizzaSummaryComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;
}
