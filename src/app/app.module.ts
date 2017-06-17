import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions }    from '@angular/http';

import { AppComponent } from './app.component';
import { SpaceshipService } from './services/spaceship.service';
import { CustomRequestOptions } from './options/custom-request.options';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
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
