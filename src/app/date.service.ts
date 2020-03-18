import { Injectable } from '@angular/core';
import { Product } from './product.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products:  Product[] = [
    {
      name: 'Product 1',
      price: 25
    },
    {
      name: 'Product 2',
      price: 35
    },
    {
      name: 'Product 3',
      price: 5
    },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    console.log(product);    
    this.products.push(product);
  }

  deleteProduct(id) {
    this.products.splice(id, 1)
  }
  
}
