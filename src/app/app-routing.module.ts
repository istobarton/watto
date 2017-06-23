import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { DataGuard } from './services/data-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' //redirects base URL to /dashboards
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'spaceship',
    component: SpaceshipDetailComponent,
    canActivate: [ DataGuard ] //Works with DataGuard Service to prevent travel without selected Spaceship
  },
  {
    path: '**',
    redirectTo: '/dashboard', //Redirects any faulty endpoint to dashboard -- Does not work in deployment
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

