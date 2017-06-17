import { Injectable } from '@angular/core';
import { Spaceship } from '../models/spaceship';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpaceshipService {

  public spaceshipUrl = 'spaceships';

  constructor(public http: Http) { }

  public getSpaceships(): Promise<Spaceship[]> {
    return this.http.get(this.spaceshipUrl)
      .toPromise()
      .then(response => response.json().products as Spaceship[])
      .catch(this.handleError);
  }

  public handleError(error: any): Promise<any> {
    console.error('An error occurred loading your spaceships! Try again!', error);
    return Promise.reject(error.message || error);
  }
}
