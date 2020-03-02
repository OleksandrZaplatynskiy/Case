import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qwwq';
  counter = 1;
  stateDropDown = false;
  products = [
    {
      id: 1,
      name: 'product 1',
      price: '12 grn'
    },
    {
      id: 2,
      name: 'product 2',
      price: '36 grn'
    },
    {
      id: 3,
      name: 'product 3',
      price: '8 grn'
    }
  ];

  newProduct = ''

  addProduct() {
    console.log(this.newProduct);
    this.products.push({
      id: 4,
      name: this.newProduct,
      price: '8 grn'
    });
  }

  changeTitle() {
    this.title = 'Lesson';
    // this.title = !this.title;
  }

  incrementCounter() {
    this.counter++;
  }

  toggleDropDown() {
    this.stateDropDown = !this.stateDropDown;
  }
}