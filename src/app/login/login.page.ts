import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from './../../domain/model/user';
import { LocalStorage } from './../../domain/services/storage';

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
    private storage:LocalStorage,
  ) {
    this.user = new User();
  }

  public async handleLogin(): Promise<void> {
    console.log('login request');
    
    this.http.post(`http://example-ecommerce.herokuapp.com/user/login`, {
      login: this.user.email,
      password: this.user.userPassword
    }
      , {
        responseType: 'text',
      }
    ).subscribe(async(success: string) => {
      const extras:NavigationExtras = {
        state:success as Object
      }
      await this.storage.setToken(success);
      this.route.navigate(['main'], extras);
      // console.log('login finally');

      },
        (error: HttpErrorResponse) => {
          console.log('---error---');
          console.log(error);
        });
  }

}
