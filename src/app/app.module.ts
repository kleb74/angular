import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HoverDirective } from './directive/hover.directive';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';
//appmodule debe ser lo mas chiquito posible, siempre. Solo levanta la aplicacion

const appRouting: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
      {path: 'products', loadChildren: './product/product.module#ProductModule'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInModule'}
    ];

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    // CartComponent,
  ],
  imports: [ //modulos externos
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting), //para habilitar routes. Tiene dos metodos. for root pq es el metodo principal
    //forRoot siempre necesario auqnue no tenga rutas aca, para q angular inicialice las rutas
    // ProductModule,
    CoreModule,
    FormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
