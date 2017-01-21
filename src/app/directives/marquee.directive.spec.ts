import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MarqueeDirective } from './marquee.directive';

describe('MarqueeDirective', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        MarqueeDirective
      ]
    });
  });
  
  it('should add a class', () => {
    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').getAttribute('class')).toBe('myNgMarquee-class');
  });
  
});

@Component({
  selector: 'my-test-cmp',
  template: `
  <div myNgMarquee></div>
  `
})
class TestComponent {
}
