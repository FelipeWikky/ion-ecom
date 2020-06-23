import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/domain/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public products: Product[];

  constructor(
    private http: HttpClient
  ) {
    this.products = [];
  }

  public showInfo(id:number){
    this.products.map(p => {
      if (p.id == id) {
        p.opened = !p.opened;
      }
    });
  }

  ngOnInit() {
    this.http.get(`http://example-ecommerce.herokuapp.com/product/list`)
      .subscribe(
        (success:Product[]) => {
          this.products = success;
        },
        (error:HttpErrorResponse) => {
          console.log('---errors-');
          console.log(error);
        }
      );
  }

}
