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

  private logged = false;

  public signIn(token:string):void {
    this.logged = true;
  }

  public signUp():void {

  }   

  public signOut():void {
    this.logged = false;
  }

  public isLogged():boolean {
    return this.logged;
  }

}