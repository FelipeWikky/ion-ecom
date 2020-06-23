export class Factory {
  id:number;
  name:string;
}

export class Product {
  id:number;
  name:string;
  price:number;
  amount:number;
  factory:Factory;

  opened:boolean;
}