import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private loginState:boolean = false;
  private token:string = "";
  private email:string = "";

  public login(token:string) {
    this.loginState = true;
    this.token = token;
  }
  public logout(){
    this.loginState = false;
    this.token = "";
  }

  public isLogged():boolean {
    return this.loginState
  }

  public getToken():string {
    return this.token;
  }

  public getEmail():string {
    return this.email
  }
  public setEmail(email:string) {
    this.email = email;
  }

}