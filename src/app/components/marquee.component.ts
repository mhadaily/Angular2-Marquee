import { Component } from '@angular/core';

@Component({
  selector: 'my-ng-marquee',
  template: `
  <div class="ngmarquee"><span>{{myText}}</span></div>
`,
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent {
  public myText: string = 'My Marquee Module With Love';
}
