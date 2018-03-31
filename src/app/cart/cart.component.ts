import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';
import {IProduct} from '../model/productInterface';

@Component({
  selector: 'ngg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private _cart: IProduct[];

  constructor(private cartService: CartService) {
    this.cartService.cartObservable$
      .subscribe( cart => this._cart = cart );
   }

  ngOnInit() {
  }

}
