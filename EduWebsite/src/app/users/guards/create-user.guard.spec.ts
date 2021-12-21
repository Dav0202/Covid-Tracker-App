import { TestBed } from '@angular/core/testing';

import { CreateUserGuard } from './create-user.guard';

describe('CreateUserGuard', () => {
  let guard: CreateUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
