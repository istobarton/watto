import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions }    from '@angular/http';

import { AppComponent } from './app.component';
import { SpaceshipService } from './services/spaceship.service';
import { CustomRequestOptions } from './options/custom-request.options';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpaceshipDetailComponent
  ],
  imports: [
    NgxGalleryModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: CustomRequestOptions
    },
    SpaceshipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
