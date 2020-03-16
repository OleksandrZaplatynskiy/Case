import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'product',
      price: 10,
      status: true
    },
    {
      id: 2,
      name: 'product',
      price: 10,
      status: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
