import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    SharedModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }
