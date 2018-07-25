import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  // {
  //     path: 'error/:status_code',
  //     component: ErrorComponent
  // },
  // {
  //     path: '**',
  //     redirectTo: 'error/404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
