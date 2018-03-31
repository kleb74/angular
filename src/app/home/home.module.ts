import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {CoreModule} from '../core/core.module';
import {RouterModule, Routes} from '@angular/router';

const homeRouting: Routes = [
  {path: '', component: HomeComponent},
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(homeRouting)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    // HomeComponent  porque tengo ruta interna.
  ]
})
export class HomeModule { }
