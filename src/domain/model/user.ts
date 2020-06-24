import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Constant} from './Constant';
import { LocalStorage } from './../services/storage';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class User {
  name:string;
  age:number;
  address:string;

  email:string;
  userPassword:string;
  userPasswordConfirm?:string;

  private logged = true;

  public async signIn():Promise<void>{
    this.logged = true;
  }

  public signUp():void {

  }

  public signOut():boolean {
    this.logged = false;
    return this.logged;
  }

  public async isLogged():Promise<boolean>{
    // const token = await this.storage.get(Constant.STORAGE_TOKEN_KEY);
    // if (token) {
    //   return true;
    // }
    return false;
  }

}