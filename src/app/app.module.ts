import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusModule } from 'http-status-pipe';
import { AuthService } from 'stub';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CoreModule } from './core/core.module';
import { MaterialModule } from './common/material.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        HttpStatusModule,
        AppRoutingModule,
        AuthModule,
        HomeModule,
        NoopAnimationsModule,
        ToastrModule.forRoot(),
        CoreModule,
        MaterialModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
