/*Native*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';

/*Components*/
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';

/*Services, Options, Routing*/
import { AppRoutingModule } from './app-routing.module';
import { CustomRequestOptions } from './options/custom-request.options';
import { SpaceshipService } from './services/spaceship.service';
import { DataGuard } from './services/data-guard.service';

/*External*/
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpaceshipDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: CustomRequestOptions
    },
    SpaceshipService,
    DataGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
