import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import {RouterModule, Routes} from '@angular/router';

const signInRouting: Routes = [
  {path: '', component: SignInComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signInRouting)
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
