import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';

import {ProductService} from '../../service/product.service';
import {CartService} from '../../service/cart.service';
import {IProduct} from '../../model/productInterface'

@Component({
  selector: 'ngg-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute,
   private productService : ProductService,
   private cartService: CartService) { //para acceder al parametro
    this.activatedRoute.params
      .subscribe((params: Params) => {
        // const {productId} = params;
        this.productService.getProductById(params.productId)
          .subscribe( (product) => this.product = product );
      });
  }

  addToCart() {
    this.cartService.addProduct(this.product);
  }

  ngOnInit() {
  }

}
