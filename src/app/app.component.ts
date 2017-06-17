import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from './services/spaceship.service';
import { Spaceship } from './models/spaceship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public name = 'Watto';

  constructor() { }
}
