import { TestBed } from '@angular/core/testing';

import { PizzaAppService } from './pizza-app.service';

describe('PizzaAppService', () => {
  let service: PizzaAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
