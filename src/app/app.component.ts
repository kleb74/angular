import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {CartService} from './service/cart.service';
import {IProduct} from './model/productInterface'
import {ProductService} from './service/product.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  description: string;
  cart: IProduct[];
  addProductText = 'Add Product';
  isLoading = false;
  url: string;

  @ViewChild('myForm') myForm: NgForm;
  constructor(private cartService: CartService, private productService: ProductService, public router: Router){
    this.cartService.cartObservable$
      .subscribe((cart) => {
        this.cart = cart;
    });
    this.productService.spinner$
      .subscribe( () => this.isLoading = false);

    this.router.events.subscribe( (event: any ) => {
      if (event instanceof NavigationEnd ) {
        this.url = event.url;
      }
    });
  }

  addProduct() {
    this.isLoading = true;
    console.log({name: this.title, description: this.description, imageUrl: 'assets/kiwi.jpg'});
    this.productService.addProduct({name: this.title, description: this.description, imageUrl: 'assets/kiwi.jpg'});
  }

}
