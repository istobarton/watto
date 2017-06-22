import { TestBed, inject } from '@angular/core/testing';

import { DataGuardService } from './data-guard.service';

describe('DataGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGuardService]
    });
  });

  it('should be created', inject([DataGuardService], (service: DataGuardService) => {
    expect(service).toBeTruthy();
  }));
});
