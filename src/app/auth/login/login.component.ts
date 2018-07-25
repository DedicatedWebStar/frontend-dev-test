import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';

const EMAIL_REGEX = /[^@]+@[^\.]+\..+/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Login';

  loginForm: FormGroup;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private _authSerivce: AuthService,
    private _router: Router,
    private _toastr: ToastrService
   ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          // Validators.pattern(EMAIL_REGEX)
        ])
      ],
      'password': [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ]
    });
  }

  submit() {
    this.loading = true;
    this._authSerivce.login(this.loginForm.value)
      .subscribe(response => {
        this.loading = false;
        this._toastr.success('Login Successfully');
      }, error => {
        this.loading = false;
        if (error.status === 200) {
          this._toastr.success('Login Successfully');
          this._router.navigate(['/secure']);
          this._authSerivce.setAuth(error.error.text);
        } else if (error.status === 401) {
          this._toastr.error('Login failed');
        }
      }
    );
  }
}
