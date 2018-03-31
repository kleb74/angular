import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[nggHover]'
})
export class HoverDirective {
  @HostBinding('style.box-shadow') boxShadow : string;
  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.boxShadow = '5px 10px #888888';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.boxShadow = '';
  }

}
