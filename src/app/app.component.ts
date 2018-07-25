import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated: any;
  constructor(
    private _apiservice: ApiService
  ) {
    this.isAuthenticated = _apiservice.isAuthorized();
  }
}
