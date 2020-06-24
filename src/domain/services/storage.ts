import { Storage } from '@ionic/storage';
import Constant from '../model/Constant';
import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Item } from './../model/cart';

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

  public async getCart(): Promise<Cart> {
    const cart = await this.storage.get(Constant.STORAGE_CART_KEY);
    if (cart) {
      return cart;
    } else {
      return new Cart;
    }
  }

  public async addItemToCart(item:Item): Promise<void> {
    try {
      const cart = await this.getCart();
      cart.items.push(item);
      await this.storage.set(Constant.STORAGE_CART_KEY, cart);
    } catch(err) {
      console.log(err);
    }
  }

  public async removeItemToCart(itemId:number){
    try {
      const cart = await this.getCart();
      const filter = cart.items.filter(i => i.id != itemId);
      const newCart = new Cart;
      newCart.items = filter;
      await this.storage.set(Constant.STORAGE_CART_KEY, newCart);
    } catch(err) {
      console.log(err);
    }
  }

  public async clearCart(){
    try {
      await this.storage.remove(Constant.STORAGE_CART_KEY);
    } catch(err) {
      console.log(err);
    }
  }
}
