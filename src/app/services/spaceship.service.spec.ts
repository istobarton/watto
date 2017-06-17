import { TestBed, inject } from '@angular/core/testing';

import { SpaceshipService } from './spaceship.service';

describe('SpaceshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceshipService]
    });
  });

  it('should be created', inject([SpaceshipService], (service: SpaceshipService) => {
    expect(service).toBeTruthy();
  }));
});
