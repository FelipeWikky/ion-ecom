import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Constant from './Constant';

export class User {
  name:string;
  age:number;
  address:string;

  email:string;
  userPassword:string;
  userPasswordConfirm?:string;

  constructor(){

  }

  private logged = false;


  public signIn(http:HttpClient):void{
    // var token = "";
    // http.post(`http://example-ecommerce.herokuapp.com/user/login`,{
    //   login:this.email,
    //   password:this.userPassword
    // }, {responseType:'text'})
    //   .subscribe(
    //     (success:string) => {
    //       token = success;
    //     },
    //     (error:HttpErrorResponse) => console.log(error)
    //   );
    // return token;
  }

  public isLogged():boolean{
    this.logged = true;
    return this.logged;
  }

  public logout():boolean {
    this.logged = false;
    return this.logged;
  }
}