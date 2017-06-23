import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SpaceshipService } from './spaceship.service';

@Injectable()
export class DataGuard implements CanActivate {
  constructor(private spaceshipService: SpaceshipService, private router: Router) {}

  /**
   * Indicates whether the spaceshipDetailComponent can be viewed based on the loading of images in
   * conjusction with the app-routing.module.
   */
  canActivate(): boolean {
    // if spaceships loaded, allow procedure
    if (
      this.spaceshipService.spaceshipsLoaded) {
      return true;
    }

    // else -- default route -- return to dashboard
    this.router.navigate(['/dashboard']);
    return false;
  }
}
