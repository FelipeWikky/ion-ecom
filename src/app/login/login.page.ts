import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from './../../domain/model/user';
import { LocalStorage } from './../../domain/services/storage';
import { GlobalService } from './../../domain/services/GlobalService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public user: User;
  public disabled:boolean = false;
  public errors:Array<string> = [];

  constructor(
    private route: Router,
    private http: HttpClient,
    private storage:LocalStorage,
    public global:GlobalService,
  ) {
    this.user = new User();
  }

  public async handleLogin(): Promise<void> {
    console.log('login request');
    this.errors = [];
    this.disabled = true;

    if (!this.user.email) {
      this.errors.push('O campo E-mail é obrigatório');
    }
    if (!this.user.userPassword) {
      this.errors.push('O campo Senha é obrigatório');
    }

    if (this.errors.length > 0) {
      this.disabled = false;
      return;
    }

    this.http.post(`http://example-ecommerce.herokuapp.com/user/login`, {
      login: this.user.email,
      password: this.user.userPassword
    }
      , {
        responseType: 'text',
      }
    ).subscribe(async(success: string) => {
      const extras:NavigationExtras = {
        state:success as any
      }
      await this.storage.setToken(success);
      this.global.login(success);
      this.route.navigate(['main'], extras);
      },
        (error: HttpErrorResponse) => {
          console.log('---error---');
          console.log(error.error);
          switch(error.error) {
            case 'Bad credentials':
              this.errors.push('E-mail ou Senha inválido(s)');
          }
        });
    this.disabled = false;
  }

}
