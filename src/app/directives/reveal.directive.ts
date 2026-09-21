import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Fades a block in the first time it scrolls into view. The transition itself
 * lives in the global stylesheet under [data-reveal]; this only flips the state.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement;
    if (typeof IntersectionObserver === 'undefined') {
      node.setAttribute('data-reveal', 'in');
      return;
    }
    node.setAttribute('data-reveal', 'out');
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        node.setAttribute('data-reveal', 'in');
        this.observer?.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
