import { TestBed, inject } from '@angular/core/testing';

import { SpaceshipService } from './spaceship.service';
import { HttpModule } from '@angular/http';

describe('SpaceshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceshipService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([SpaceshipService], (service: SpaceshipService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a call for throwing errors', inject([SpaceshipService], (service: SpaceshipService) => {
    expect(service.getSpaceships).toBeTruthy();
  }));

  it('should have a call for getting spaceships', inject([SpaceshipService], (service: SpaceshipService) => {
    expect(service.handleError).toBeTruthy();
  }));

  it('getSpaceships should return a Promise', inject([SpaceshipService], (service: SpaceshipService) => {
    expect(service.getSpaceships()).toEqual(
      service.http.get(service.spaceshipUrl).toPromise()
    );
  }));

});
