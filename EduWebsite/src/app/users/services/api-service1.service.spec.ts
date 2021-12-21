import { TestBed } from '@angular/core/testing';

import { ApiService1Service } from './api-service1.service';

describe('ApiService1Service', () => {
  let service: ApiService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
