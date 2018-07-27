import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SecureComponent } from './components/secure/secure.component';
import { MaterialModule } from '../common/material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, SecureComponent]
})
export class HomeModule { }
