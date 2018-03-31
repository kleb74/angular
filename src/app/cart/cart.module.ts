import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';

const cartRouting: Routes = [
  {path: '', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cartRouting),
    ReactiveFormsModule
  ],
  declarations: [
    CartComponent,
    CheckoutComponent
  ],

})
export class CartModule { }
