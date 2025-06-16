import { Store } from './../models/store';
import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard {
  @Input() color:string = 'gray'
  constructor(  public elementRef:ElementRef) {
    this.elementRef.nativeElement.style.boxShadow =`5px 5px 30px ${this.color}`
    this.elementRef.nativeElement.style.borderRadius=`20px`
  }

@HostListener('mouseover')  mouseOver(){
    this.elementRef.nativeElement.style.boxShadow =`5px 10px 15px black`
  }
@HostListener('mouseout')  mouseOut(){
    this.elementRef.nativeElement.style.boxShadow =`5px 5px 30px ${this.color}`
  }
}
