import { Component, OnInit } from '@angular/core';
import { DataService } from '../date.service';
import { Product } from '../product.models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-li',
  templateUrl: './product-li.component.html',
  styleUrls: ['./product-li.component.scss']
})
export class ProductLiComponent implements OnInit {

  products: Product[];
  formAddProduct: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
    // console.log(this.products); 
    this.formAddProduct = this.fb.group({
      name: [''],
      price: ['']
    })  

    this.dataService.viewCatalog.subscribe( (view) => {
      console.log(view);
    })
  }

  onAddProduct() {
    this.dataService.addProduct(this.formAddProduct.value);
  }

  deleteProduct(id) {
    this.dataService.deleteProduct(id);
  }
  
}
