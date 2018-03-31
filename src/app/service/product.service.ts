import {IProduct} from '../model/productInterface'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/do';
import 'rxjs/operator/delay';

const productsAPI = 'http://localhost:3000/products'

@Injectable()
export class ProductService {
  private _products: IProduct[] = [];
  private productsSubject : BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]); //solo me interesa .next es en el servicio, por eso es privado
  public productsObservable$ = this.productsSubject.asObservable(); //subject tb existe pero no da valor por default
  private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public spinner$ = this.spinnerSubject.asObservable();

  private get products(): IProduct[] {
    return JSON.parse(JSON.stringify(this._products));
  };

  private set products(products : IProduct[]) {
      setTimeout(() => {
        this._products = products;
        this.productsSubject.next(this._products);
        this.spinnerSubject.next(false);
      }, 1000);
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<IProduct[]>(productsAPI)
      .subscribe( (products) => {
        this.products = products;
      });
  }

  removeProductByIndex(index: number, product: IProduct) {
    this.httpClient.delete(`${productsAPI}/${product.id}`)
      .subscribe( (productDeleted) => {
        let newProducts = this.products;
        newProducts.splice(index, 1);
        this.products = newProducts;
      });
  }

  addProduct(product) {
    this.httpClient.post<IProduct>(productsAPI, product)  //hay q suscribirse sino no se ejecuta
      .subscribe( (newProduct: IProduct) => {
        let newProducts = this.products;
        newProducts.push(newProduct);
        this.products = newProducts;
      });
  }

  getProductById(id: number) : Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${productsAPI}/${id}`) //retorno el observable
  }
}
