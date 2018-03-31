import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngg-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
  });

  constructor() {
    this.myForm.get('firstName')
      .valueChanges
      .subscribe((firstName) => {
        console.log(firstName);
      });
  }

  ngOnInit() {
  }

}
