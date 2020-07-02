import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/domain/model/product';
import { Item } from './../../domain/model/cart';
import { LocalStorage } from './../../domain/services/storage';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public products: Product[];

  constructor(
    private http: HttpClient,
    private storage: LocalStorage,
  ) {
    this.products = [];
  }

  public showInfo(id: number) {
    this.products.map(p => {
      if (p.id == id) {
        p.opened = !p.opened;
      }
    });
  }

  public async addToCart(id: number) {
    const item: Item = {
      id: parseInt(Math.random().toString().split('.')[1]),
      product: this.products.filter(p => p.id == id)[0],
      buyQuantity: 1
    }
    try {
      await this.storage.addItemToCart(item);
      this.products.filter(p => p.id == id)[0].opened = false;
      alert(`${this.products.filter(p => p.id == id)[0].name} adicionado ao Carrinho.`);
    } catch(err) {
      console.log(err);
    }
  }

  ngOnInit() {
    console.log('request initiated');
    this.http.get(`http://example-ecommerce.herokuapp.com/product/list`)
      .subscribe(
        (success: Product[]) => {
          console.log('products requested');
          this.products = success;
        },
        (error: HttpErrorResponse) => {
          console.log('---errors-');
          console.log(error);
        }
      );
  }

}
