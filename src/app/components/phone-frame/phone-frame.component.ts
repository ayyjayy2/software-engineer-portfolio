import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  inject,
  signal,
  viewChild,
} from '@angular/core';

/** The production app, for visitors who want to sign up and use it for real. */
export const ITINERISTS_URL = 'https://the-itinerists.web.app/home';
/** The sign-in-free demo build, seeded with a sample trip. Session-only data. */
export const ITINERISTS_DEMO_URL = 'https://the-itinerists-demo.web.app/home';

const PHONE_WIDTH = 390;
const PHONE_HEIGHT = 844;

/**
 * A phone-shaped frame that embeds the demo build of The Itinerists.
 * The iframe starts loading the first time the frame scrolls into view;
 * "reset" reloads it, which throws away the visitor's session.
 */
@Component({
  selector: 'app-phone-frame',
  templateUrl: './phone-frame.component.html',
  styleUrl: './phone-frame.component.scss',
})
export class PhoneFrameComponent implements AfterViewInit, OnDestroy {
  readonly url = ITINERISTS_DEMO_URL;
  /** The iframe has been given its URL. */
  readonly started = signal(false);
  /** The iframe finished loading, so the overlay can drop away. */
  readonly ready = signal(false);

  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private wrap = viewChild.required<ElementRef<HTMLElement>>('wrap');
  private phone = viewChild.required<ElementRef<HTMLElement>>('phone');
  private frame = viewChild.required<ElementRef<HTMLIFrameElement>>('frame');
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.fit();
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        this.load();
        this.observer?.disconnect();
      }
    }, { rootMargin: '200px 0px' });
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  @HostListener('window:resize')
  fit() {
    const wrap = this.wrap().nativeElement;
    const avail = wrap.clientWidth || PHONE_WIDTH;
    const scale = Math.max(
      0.74,
      Math.min(1, avail / (PHONE_WIDTH + 12), (window.innerHeight * 0.78) / PHONE_HEIGHT),
    );
    this.phone().nativeElement.style.transform = `scale(${scale})`;
    wrap.style.height = `${Math.round(PHONE_HEIGHT * scale)}px`;
  }

  load() {
    if (this.started()) return;
    this.frame().nativeElement.src = this.url;
    this.started.set(true);
  }

  onLoad() {
    if (this.started()) this.ready.set(true);
  }

  /** Reload the frame: the demo clears its session on every page load. */
  reset() {
    this.ready.set(false);
    this.started.set(false);
    this.frame().nativeElement.removeAttribute('src');
    queueMicrotask(() => this.load());
  }
}
