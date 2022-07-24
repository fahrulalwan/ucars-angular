import { TestBed } from '@angular/core/testing';

import { CarsStoreService } from './cars-store.service';

describe('CarsStoreService', () => {
  let service: CarsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
