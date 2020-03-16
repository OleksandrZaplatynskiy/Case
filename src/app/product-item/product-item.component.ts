import { Component, OnInit, Input } from '@angular/core';
import { log } from 'util';
import { strict } from 'assert';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() userName;

  // акстив чи не актив кнопки
  disable = false;

  price = 5;
  options = ['s', 'm', 'l'];
  amount = 1;

  constructor() { }

  ngOnInit() {
    console.log(this.userName);
  }

  addToCard(id: number) {
    console.log(id);
  }

  selectSize(size: string) {
    console.log(size);
  }

  changeQuantity(quantity: string) {
    console.log(quantity);
  }

  decrease() {
    if(this.amount > 1) {
      this.amount = (+this.amount - 1);
    }
  }
  increase() {
    this.amount = (+this.amount + 1);
  }
}
