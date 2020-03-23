import { Component, OnInit } from '@angular/core';
import { DataService } from '../date.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  unSubscride = new Subject();

  counter = 0;

  constructor(
    private dataServise: DataService
  ) { }

  ngOnInit(): void {
    this.dataServise.deleteProductSubject.pipe(takeUntil(this.unSubscride)).subscribe( (data: number) => {
      this.counter += data;
      console.log(this.counter);
    });
  }

  ngOnDestory() {
    this.unSubscride.next();
    this.unSubscride.complete();

  }

}
