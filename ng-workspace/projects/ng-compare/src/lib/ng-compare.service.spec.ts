import { TestBed } from '@angular/core/testing';

import { NgCompareService } from './ng-compare.service';

describe('NgCompareService', () => {
  let service: NgCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
