import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpaceshipDetailComponent } from './components/spaceship-detail/spaceship-detail.component';
import { DataGuard } from './services/data-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'spaceship',
    component: SpaceshipDetailComponent,
    canActivate: [DataGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

