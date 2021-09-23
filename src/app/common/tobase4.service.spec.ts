import { TestBed } from '@angular/core/testing';

import { Tobase4Service } from './tobase4.service';

describe('Tobase4Service', () => {
  let service: Tobase4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tobase4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
