import { TestBed } from '@angular/core/testing';

import { BrandsStoreService } from './brands-store.service';

describe('BrandsStoreService', () => {
  let service: BrandsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
