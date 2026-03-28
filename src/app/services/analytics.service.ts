import { Injectable } from '@angular/core';

declare function gtag(...args: unknown[]): void;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  trackSectionView(sectionName: string) {
    if (typeof gtag === 'undefined') return;
    gtag('event', 'section_view', {
      section_name: sectionName,
    });
  }

  trackEvent(eventName: string, params: Record<string, unknown> = {}) {
    if (typeof gtag === 'undefined') return;
    gtag('event', eventName, params);
  }
}
