import { Component } from '@angular/core';

import { MarqueeService } from './services/marquee.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pipeTest: string = 'Marquee angular 2 app';
  url: string = 'https://github.com/mhadaily/angular2-marquee';

  constructor(public marquee: MarqueeService) {
    // Do something with marquee
  }
}
