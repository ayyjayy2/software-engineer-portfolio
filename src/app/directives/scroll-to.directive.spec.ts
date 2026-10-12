import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScrollToDirective } from './scroll-to.directive';

@Component({
  imports: [ScrollToDirective],
  template: `
    <a appScrollTo href="#target">Go</a>
    <section id="target"></section>
  `,
})
class HostComponent {}

describe('ScrollToDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HostComponent] });
  });

  it('scrolls to the section without putting a # in the URL', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const target = root.querySelector('#target') as HTMLElement;
    const scroll = spyOn(target, 'scrollIntoView');
    const urlBefore = location.href;

    const click = new MouseEvent('click', { bubbles: true, cancelable: true });
    root.querySelector('a')!.dispatchEvent(click);

    expect(click.defaultPrevented).toBeTrue();
    expect(scroll).toHaveBeenCalled();
    expect(location.href).toBe(urlBefore);
  });

  it('leaves modifier clicks alone so the link can open in a new tab', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const scroll = spyOn(root.querySelector('#target') as HTMLElement, 'scrollIntoView');
    const link = root.querySelector('a')!;
    let prevented: boolean | undefined;
    // Runs after the directive's listener; records its verdict, then keeps Karma's page put.
    link.addEventListener('click', e => { prevented = e.defaultPrevented; e.preventDefault(); });

    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, metaKey: true }));

    expect(prevented).toBeFalse();
    expect(scroll).not.toHaveBeenCalled();
  });
});
