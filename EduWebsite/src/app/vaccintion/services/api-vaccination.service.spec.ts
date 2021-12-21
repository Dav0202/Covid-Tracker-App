import { TestBed } from '@angular/core/testing';

import { ApiVaccinationService } from './api-vaccination.service';

describe('ApiVaccinationService', () => {
  let service: ApiVaccinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVaccinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
