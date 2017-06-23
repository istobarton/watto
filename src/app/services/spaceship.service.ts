import { Injectable } from '@angular/core';
import { Spaceship } from '../models/spaceship';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class SpaceshipService {

  public spaceshipsLoaded = false; //boolean to recognize initial image load
  public spaceshipUrl = 'spaceships'; //added to base url - easy to change
  public selectedSpaceship = Spaceship; //ensure the selection matches model

  constructor(public http: Http) {
  }

  //get spaceships and immediately add imgUrl upon receipt
  public getSpaceships(): Promise<Spaceship[]> {
    return this.http.get(this.spaceshipUrl)
      .toPromise()
      .then(response =>
        this.createImagePath(response.json().products) as Spaceship[]
      )
      .catch(this.handleError);
  }

  // iterate through the returned spaceships and add imgUrl to each for img rendering
  public createImagePath(spaceships) {
    for (const index in spaceships) {
      if (spaceships[ index ].hasOwnProperty('name')) {
        //replace spaces with dashes using regex
        spaceships[ index ][ 'imgUrl' ] = spaceships[ index ].name.toLowerCase().replace(/ /g, '-');
      }
    }

    this.boolTrue();

    return spaceships
  }

  // flip the spaceship boolean to indicate the spaceships have loaded
  public boolTrue() {
    this.spaceshipsLoaded = true;
  }

  //return the currently selected spaceship
  public getSelectedShip() {
    return this.selectedSpaceship;
  }

  //handle error in the event of a failed call to retrieve spaceships
  public handleError(error: any): Promise<any> {
    console.error('An error occurred loading your spaceships! Try again!', error);
    return Promise.reject(error.message || error);
  }
}
