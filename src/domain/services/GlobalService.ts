import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private loginState:boolean = false;
  private token:string = "";
  private email:string = "";

  public async login(token:string) {
    // const p = new Promise((resolve, reject) => {
    //   try {
    //     resolve(() => {
    //       this.loginState = true;
    //       this.token = token;
    //       console.log('login ' + this.token);  
    //     })
    //   } catch (e) {
    //     reject(e)
    //   }
    // });
    // p.then(() => true);

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

  public async getToken() {
    return this.token;
  }

  public getEmail():string {
    return this.email
  }
  public setEmail(email:string) {
    this.email = email;
  }

}