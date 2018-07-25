import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { pick } from 'lodash';
import { AuthData } from '../models/auth-data.model';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class ApiService {
  private _sessionAuthData: any;
  private _sessionUser: any;
  private _isAuthorized: boolean;
  private _rememberMe: boolean;

  constructor(private _httpClient: HttpClient) { }

  isAuthorized(): boolean {
    this._isAuthorized = false;
    this._sessionAuthData = JSON.parse(sessionStorage.getItem('auth_data'));
    if (!this._sessionAuthData) {
      this._sessionAuthData = JSON.parse(localStorage.getItem('auth_data'));
    }
    if (this._sessionAuthData) {
      this._isAuthorized = true;
    }

    return this._isAuthorized;
  }

  login(url, data) {
    let httpOptions;

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(data.email + ':' + data.password)
      })
    };
    return this._httpClient.get(`${environment.apiUrl}${url}`, httpOptions);

  }

  setAuthData(token: any) {
    this._setAuthData(token);
  }

  reset() {
    sessionStorage.removeItem('auth_data');
    localStorage.removeItem('auth_data');
  }

  private _setAuthData(data: any) {
    this._sessionAuthData = data;
    sessionStorage.setItem('auth_data', JSON.stringify(data));
    if (this._rememberMe) {
      localStorage.setItem('auth_data', JSON.stringify(data));
    }
  }

}
