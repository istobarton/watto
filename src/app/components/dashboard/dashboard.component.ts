import { Component, OnInit } from '@angular/core';
import { Spaceship } from '../../models/spaceship';
import { SpaceshipService } from '../../services/spaceship.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public spaceships: Spaceship[] = [];
  public selectedSpaceship: Spaceship;

  constructor(
    private spaceshipService: SpaceshipService
  ) { }

  ngOnInit(): void {
    console.log('oninit');
    this.spaceshipService.getSpaceships()
      .then(spaceships => this.spaceships = spaceships);
  }

  public selectSpaceship(spaceship) {
    this.selectedSpaceship = spaceship;
  }
}
