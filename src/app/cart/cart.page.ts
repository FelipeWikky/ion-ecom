import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './../../domain/services/GlobalService';
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
    private route: Router,
    private http: HttpClient,
    public global: GlobalService,
    private storage: LocalStorage,
  ) { }

  async ionViewDidEnter() {
    this.loadCart();
  }

  public async loadCart() {
    try {
      this.cart = await this.storage.getCart();
      console.log(this.cart);
    } catch (err) {
      console.log('loadCart');
      console.log(err);
    }
  }

  public async removeToCart(itemId: number) {
    await this.storage.removeItemToCart(itemId);
    alert('Item excluído do carrinho.');
    await this.loadCart();
  }

  public async clearCart() {
    await this.storage.clearCart();
    switch (this.cart.items.length) {
      case 0:
        alert('Não há itens no carrinho para ser excluídos.');
        break;
      case 1:
        this.cart.items = [];
        alert('Item do carrinho excluído.');
        break;
      default:
        this.cart.items = [];
        alert('Itens do carrinho excluídos.');
    }
    // await this.loadCart();
  }

  public alert(product: string) {
    alert(product);
  }

  async ngOnInit() {
    await this.loadCart();
  }

}
