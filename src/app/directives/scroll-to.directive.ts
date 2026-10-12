import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * In-page links (`<a appScrollTo href="#work">`) scroll to their section without
 * adding a # to the URL. Smooth scrolling and the nav offset come from the global
 * stylesheet (scroll-behavior, scroll-padding-top). Modifier clicks and missing
 * targets fall through to the browser's normal link handling.
 */
@Directive({
  selector: 'a[appScrollTo]',
})
export class ScrollToDirective {
  private el = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const id = (this.el.nativeElement.getAttribute('href') ?? '').replace(/^#/, '');
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView();
  }
}
