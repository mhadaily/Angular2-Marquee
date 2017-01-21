import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[myNgMarquee]'
})
export class MarqueeDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementAttribute(el.nativeElement, 'class', 'myNgMarquee-class');
  }
}
