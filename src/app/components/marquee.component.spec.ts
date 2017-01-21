import { TestBed } from '@angular/core/testing';

import { MarqueeComponent } from './marquee.component';

describe('MarqueeComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MarqueeComponent
      ]
    });
  });
  
  it('should have an url', () => {
    let fixture = TestBed.createComponent(MarqueeComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.myText).toEqual('My Marquee Module With Love');
  });
  
});

