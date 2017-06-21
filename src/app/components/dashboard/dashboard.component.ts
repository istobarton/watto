import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Spaceship } from '../../models/spaceship';
import { SpaceshipService } from '../../services/spaceship.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public spaceships: Spaceship[] = [];

  constructor(
    private spaceshipService: SpaceshipService
  ) {
    console.log('constructor');
    this.spaceshipService.getSpaceships()
      .then(spaceships => this.spaceships = spaceships);
  }

  public selectSpaceship(spaceship) {
    this.spaceshipService.selectedSpaceship = spaceship;
  }

  public createImagePath() {
    let spaceships = this.spaceships;

    for (const index in spaceships){
      this.spaceships[index]['imgUrl'] = spaceships[index].name.toLowerCase().replace(/ /g, '-');
    }
  }
}
