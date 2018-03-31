import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IProduct} from '../model/productInterface'

@Component({
  selector: 'ngg-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input('product') product: IProduct;
  @Output() productRemoved: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit() {
  }

  removeItem($event) {
    $event.stopPropagation();
    this.productRemoved.emit(this.product);
  }
}
