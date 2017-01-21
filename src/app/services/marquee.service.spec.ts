import { Injector } from '@angular/core';
import { MarqueeService } from './marquee.service';
import { getTestBed, TestBed } from '@angular/core/testing';

describe('MarqueeService', () => {
  let injector: Injector;
  let textMarquee: MarqueeService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MarqueeService
      ]
    });
    injector = getTestBed();
    textMarquee = injector.get(MarqueeService);
  });
  
  afterEach(() => {
    injector = undefined;
    textMarquee = undefined;
  });
  
  it('is defined', () => {
    expect(MarqueeService).toBeDefined();
    expect(textMarquee).toBeDefined();
    expect(textMarquee instanceof MarqueeService).toBeTruthy();
  });
  
  it('should ...', () => {
    expect(textMarquee.title).toBe('Marquee Library');
  });
});
