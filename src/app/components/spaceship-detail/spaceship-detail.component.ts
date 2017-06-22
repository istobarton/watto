import { Component, OnInit } from '@angular/core';

import { SpaceshipService } from '../../services/spaceship.service';

@Component({
  selector: 'app-spaceship-detail',
  templateUrl: './spaceship-detail.component.html',
  styleUrls: ['./spaceship-detail.component.css']
})
export class SpaceshipDetailComponent implements OnInit {
  public selectedSpaceship: any;

  constructor(
    private spaceshipService: SpaceshipService
  ) { }

  ngOnInit(): void {

    this.selectedSpaceship = this.spaceshipService.getSelectedShip();

  }
}
