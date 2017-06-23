import { Injectable } from '@angular/core';
import { Spaceship } from '../models/spaceship';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class SpaceshipService {

  public spaceshipsLoaded = false;
  public spaceshipUrl = 'spaceships';
  public selectedSpaceship = Spaceship;

  constructor(public http: Http) {
  }

  public getSpaceships(): Promise<Spaceship[]> {
    return this.http.get(this.spaceshipUrl)
      .toPromise()
      .then(response =>
        this.createImagePath(response.json().products) as Spaceship[]
      )
      .catch(this.handleError);
  }

  public createImagePath(spaceships) {
    for (const index in spaceships) {
      if (spaceships.hasOwnProperty('name')) {
        spaceships[ index ][ 'imgUrl' ] = spaceships[ index ].name.toLowerCase().replace(/ /g, '-');
      }
    }

    this.boolTrue();

    return spaceships
  }

  public boolTrue() {
    this.spaceshipsLoaded = true;
  }

  public getSelectedShip() {
    return this.selectedSpaceship;
  }

  public handleError(error: any): Promise<any> {
    console.error('An error occurred loading your spaceships! Try again!', error);
    return Promise.reject(error.message || error);
  }
}
