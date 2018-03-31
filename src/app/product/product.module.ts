import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductListItemComponent} from '../product-list-item/product-list-item.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

const productRouting: Routes = [
  {path: '', component: ProductListComponent},
  {path: ':productId', component: ProductViewComponent}, //magia. Aunque es pathBeg se da cuenta de rutas q matchean mejor
]

@NgModule({
  imports: [
    CommonModule,  //igual que BrowserModule pero sin proceso de inicializacion - igual q browser module pero para modulos hijos
    RouterModule.forChild(productRouting),
    CoreModule
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductViewComponent
  ],
  exports: [
    // ProductListComponent,
    // ProductListItemComponent, si esta anda pero no es
    // ProductViewComponent tengo las rutaas aca, no necesito mas los exports. Ruta interna al modulo
  ],
})
export class ProductModule { }
