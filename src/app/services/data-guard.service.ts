import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SpaceshipService } from './spaceship.service';
import { Spaceship } from '../models/spaceship';

@Injectable()
export class DataGuard implements CanActivate {
  constructor(private spaceshipService: SpaceshipService, private router: Router) {}

  canActivate(): boolean {
    if (
      this.spaceshipService.spaceshipsLoaded) {
      console.log(this.spaceshipService.spaceshipsLoaded);
      return true;
    }

    // Navigate to the dashboard page
    this.router.navigate(['/dashboard']);
    return false;
  }
}
