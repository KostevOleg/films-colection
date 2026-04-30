import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus()
  }
}
