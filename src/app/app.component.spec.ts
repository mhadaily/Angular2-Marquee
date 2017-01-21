import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MarqueeComponent } from './components/marquee.component';
import { MarqueeDirective } from './directives/marquee.directive';
import { MarqueePipe } from './pipes/marquee.pipe';
import { MarqueeService } from './services/marquee.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MarqueeComponent, MarqueeDirective, MarqueePipe
      ],
      providers: [MarqueeService]
    });
  });
  
  it('should have an url', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/mhadaily/angular2-marquee');
  });
  
});
