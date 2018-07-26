import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecureComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    this.apiService.reset();
    const route = this._router;
    setTimeout(function() {
      route.navigate(['/auth/login']);
      window.location.reload();
    }, 1500 );
  }
}
