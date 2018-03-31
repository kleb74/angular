import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngg-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input('spinnerClass')
  spinnerClass: string;

  constructor() {

  }

  ngOnInit() {
  }

}
