import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './../../domain/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public user: User;
  public errors: string[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.user = new User();
  }

  public handleRegister(): void {
    this.errors = [];
    if (!this.user.address || !this.user.age || !this.user.email || !this.user.name || !this.user.userPassword || !this.user.userPasswordConfirm) {
      this.errors.push('Todos os campos são obrigatórios.');
    }

    if (!this.user.age || this.user.age < 18) {
      this.errors.push('Apenas pessoas com 18 anos ou mais.');
    }

    if (this.user.userPassword.localeCompare(this.user.userPasswordConfirm) != 0) {
      this.errors.push('As senhas não coincidem.');
    }

    if (this.errors.length > 0) {
      console.log(this.errors.length);
      return;
    }

    this.http.post(`http://example-ecommerce.herokuapp.com/user/customer/add`, this.user, { responseType: 'text'})
      .subscribe(
        (response: string) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          switch(error.error) {
            case 'Customer email is already registered.':
              this.errors.push('Este E-mail já está em uso.');
              break;
          }
          this.errors.push('');
          console.log('---error---');
          console.log(error);
        });
  }


}
