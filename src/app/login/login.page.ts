import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from './../../domain/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public user: User;

  constructor(
    private route: Router,
    private http: HttpClient,
  ) {
    this.user = new User();
  }

  public handleLogin(): void {
    this.http.post(`http://example-ecommerce.herokuapp.com/user/login`, {
      login: this.user.email,
      password: this.user.userPassword
    }
      , {
        responseType: 'text',
      }
    ).subscribe((success: string) => {

      },
        (error: HttpErrorResponse) => {
          console.log('---error---');
          console.log(error);
        });
  }

}
