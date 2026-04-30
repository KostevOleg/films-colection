import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AutofocusDirective } from './autofocus';

describe('AutofocusDirective', () => {
  it('should create an instance', () => {
    const input = document.createElement('input');

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: new ElementRef(input),
        },
      ],
    });

    const directive = TestBed.runInInjectionContext(() => {
      return new AutofocusDirective();
    });

    expect(directive).toBeTruthy();
  });
});
