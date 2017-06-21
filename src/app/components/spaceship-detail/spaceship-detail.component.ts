import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { Spaceship } from '../../models/spaceship';
import { SpaceshipService } from '../../services/spaceship.service';

@Component({
  selector: 'app-spaceship-detail',
  templateUrl: './spaceship-detail.component.html',
  styleUrls: ['./spaceship-detail.component.css']
})
export class SpaceshipDetailComponent implements OnInit {
  public selectedSpaceship: any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private spaceshipService: SpaceshipService
  ) { }

  ngOnInit(): void {

    this.selectedSpaceship = this.spaceshipService.getSelectedShip();

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '.png',
        medium: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '.png',
        big: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '.png'
      },
      {
        small: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '.jpg',
        medium: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '.jpg',
        big: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '.jpg'
      },
      {
        small: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '_1.jpg',
        medium: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '_1.jpg',
        big: 'assets/images/spaceships/' + this.selectedSpaceship.imgUrl + '/' + this.selectedSpaceship.imgUrl + '_1.jpg'
      }
    ];
  }
}
