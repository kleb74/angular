import { Component, OnInit } from '@angular/core';
import {IProduct} from '../model/productInterface';
import {ProductService} from '../service/product.service';
import { CartService } from '../service/cart.service';

//al ser @Component tb es @Injectable
@Component({
  selector: 'ngg-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isLoading = true;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.productService.productsObservable$
      .subscribe( (products) => {
        this.products = products;
      });
    this.productService.spinner$
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
  }

  ngOnInit() {}

  removeProduct(i: number, product: IProduct) {
    this.isLoading = true;
    this.productService.removeProductByIndex(i, product);
    this.cartService.removeProduct(product);
  }
}
