import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[sameHeight]'
})
export class SameHeightDirective implements AfterViewChecked {
  @Input() sameHeight: any;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    this.matchHeight(this.el.nativeElement, this.sameHeight);
  }

  matchHeight (parent: HTMLElement, className: string) {
    if (!parent) { return; }

    const children = parent.getElementsByClassName(className);
    if (!children) { return; }

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    const heights = Array.from(children).map(x => x.getBoundingClientRect().height);

    const maxHeight = heights.reduce((prev, curr) => {
        return curr > prev ? curr : prev;
    }, 0);

    Array.from(children).forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
  }
}
