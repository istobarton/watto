import { Injectable } from '@angular/core';
import { Spaceship } from '../models/spaceship';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class SpaceshipService {

  public spaceshipUrl = 'spaceships';
  public selectedSpaceship = Spaceship;

  constructor(public http: Http) { }

  public getSpaceships(): Promise<Spaceship[]> {
    return this.http.get(this.spaceshipUrl)
      .toPromise()
      .then(response =>
        this.createImagePath(response.json().products) as Spaceship[]
      )
      .catch(this.handleError);
  }

  public createImagePath(spaceships) {
    for (const index in spaceships){
      spaceships[index]['imgUrl'] = spaceships[index].name.toLowerCase().replace(/ /g, '-');
    }
    return spaceships
  }

  public getSelectedShip() {
    return this.selectedSpaceship;
  }

  public handleError(error: any): Promise<any> {
    console.error('An error occurred loading your spaceships! Try again!', error);
    return Promise.reject(error.message || error);
  }
}
