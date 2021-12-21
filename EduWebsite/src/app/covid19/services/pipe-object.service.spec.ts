import { TestBed } from '@angular/core/testing';

import { PipeObjectService } from './pipe-object.service';

describe('PipeObjectService', () => {
  let service: PipeObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
