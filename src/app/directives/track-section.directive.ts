import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Directive({
  selector: '[appTrackSection]'
})
export class TrackSectionDirective implements OnInit, OnDestroy {
  @Input('appTrackSection') sectionName = '';

  private analytics = inject(AnalyticsService);
  private observer!: IntersectionObserver;
  private hasTracked = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasTracked) {
            this.analytics.trackSectionView(this.sectionName);
            this.hasTracked = true;
          }
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
