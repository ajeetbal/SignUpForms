import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[bluecolor]'
})
export class BluecolorDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.paddingleft="150px";
    
   }

}
