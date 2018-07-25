import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../core/services/api.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
    private _apiService: ApiService
  ) { }

  login(data) {
    return this._apiService.login('/login', data)
      .map((res: any) => {
        console.log('res', res);
        // this._apiService.setAuthData(res);
        return true;
      });
    }
  setAuth(token) {
    this._apiService.setAuthData(token);
  }
}
