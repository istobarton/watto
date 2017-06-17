import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from './services/spaceship.service';
import { Spaceship } from './models/spaceship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public spaceships: Spaceship[];
  public name = 'Watto';

  constructor(
    private spaceshipService: SpaceshipService
  ) { }

  ngOnInit(): void {
    this.getSpaceships();
  }

  getSpaceships(): void {
    this.spaceshipService.getSpaceships().then(spaceships => this.spaceships = spaceships);
  }
}
