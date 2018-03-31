import {BehaviorSubject} from 'rxjs/BehaviorSubject'

import {IProduct} from '../model/productInterface'

// @Injectable()
export class CartService {
  private _cart : IProduct[] = [];
  private cartSubject : BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]); //solo me interesa .next es en el servicio, por eso es privado
  public cartObservable$ = this.cartSubject.asObservable(); //subject tb existe pero no da valor por default

  constructor() {
    this.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
  }

  private get cart(): IProduct[] {
    return this._cart;
  }

  private set cart(cart: IProduct[]) {
    this._cart = cart;
    localStorage.setItem('cart', JSON.stringify(this._cart));
    this.cartSubject.next(this._cart);
  }

  addProduct(product: IProduct) {
    this.cart = this.cart.concat(product)
  }

  removeProduct(product: IProduct) {
    this.cart = this.cart.filter( (p)=> p.id !== product.id );
  }

  // get() : IProduct[] {
  //   return this._cart;
  // }
}
