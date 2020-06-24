import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './../../domain/services/GlobalService';
import { Cart } from './../../domain/model/cart';
import cart from './../../domain/model/cart';
import { LocalStorage } from './../../domain/services/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cart = cart;

  constructor(
    private route:Router,
    private http:HttpClient,
    public global:GlobalService,
    private storage:LocalStorage,
  ) { }

  public async removeToCart(itemId:number){
    await this.storage.removeItemToCart(itemId);
    alert('Item excluído do carrinho.');
  }

  public async clearCart(){
    await this.storage.clearCart();
    this.cart.items = [];
    alert('Item(ns) do carrinho excluídos.');
  }

  async ngOnInit() {
    try {
      this.cart = await this.storage.getCart();
      console.log(this.cart);
    } catch(err) {
      console.log(err);
    }
  }

}
