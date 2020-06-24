import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  public loginState:boolean = false;
  public token:string = "";

  public login(token:string) {
    this.loginState = true;
    this.token = token;
  }
}