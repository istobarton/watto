import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import { SpaceshipService } from './services/spaceship.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SpaceshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
