import { Component } from '@angular/core';

interface ConferenceEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
  type: string;
}

/** Dated rows for talks, conferences and meetups. Rendered inside the Record section. */
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  events: ConferenceEvent[] = [
    {
      title: 'All Things AI',
      date: 'March 24, 2026',
      location: 'Durham, NC',
      type: 'Conference',
      description: 'Attended a full-day AI conference covering the latest developments in LLMs and AI-powered product development. Gained insight into how companies are integrating AI into their products and walked away with best practices for building with AI.',
      tags: ['AI', 'LLMs'],
    },
  ];

  meta(event: ConferenceEvent): string {
    return [event.type, event.location, ...event.tags].join(' · ');
  }
}
