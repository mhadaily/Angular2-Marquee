import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MarqueePipe } from './marquee.pipe';

describe('MarqueePipe', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        MarqueePipe
      ]
    });
  });
  
  it('should make a comment', () => {
    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').textContent)
      .toEqual(`Marquee angular 2 app...TESTING PIPE`);
  });
  
});

@Component({
  selector: 'my-test-cmp',
  template: `
  <div>{{'Marquee angular 2 app' | myNgMarquee}}</div>
  `
})
class TestComponent {
}

