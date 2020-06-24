import { Product } from 'src/domain/model/product';

export class Item {
  id:number;
  product:Product;
  buyQuantity:number;
}

export class Cart {
  items:Item[] = new Array<Item>();

}

export default new Cart();