import { TestBed, inject } from '@angular/core/testing';

import { DataGuard } from './data-guard.service';

describe('DataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGuard]
    });
  });

  it('should be created', inject([DataGuard], (service: DataGuard) => {
    expect(service).toBeTruthy();
  }));
});
