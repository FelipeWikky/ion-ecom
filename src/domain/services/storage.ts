import { Storage } from '@ionic/storage';
import Constant from '../model/Constant';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class LocalStorage {
  constructor(
    private storage: Storage
  ) { }

  public async getToken(): Promise<string> {
    try {
      const token: string = await this.storage.get(Constant.STORAGE_TOKEN_KEY);
      if (token) {
        return token
      }
      return "";
    } catch(err) {
      console.log(err);
      return "";
    }
  }
  public async setToken(token: string): Promise<void> {
    try {
      await this.storage.set(Constant.STORAGE_TOKEN_KEY, token);
    } catch (err) {
      console.log(err);
    }
  }
  public async removeToken():Promise<void> {
    console.log('remove token');
    try {
      await this.storage.remove(Constant.STORAGE_TOKEN_KEY);
      
    } catch (err) {
      console.log(err);
    } 
  }

  public async getCart(): Promise<any[]> {
    const cart = await this.storage.get(Constant.STORAGE_CART_KEY);
    if (cart) {
      return cart;
    } else {
      return new Array<any>();
    }
  }

  public setCart(): void {

  }
}
