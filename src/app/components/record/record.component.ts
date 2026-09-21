import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { EventsComponent } from '../events/events.component';

interface LedgerLine {
  n: string;
  what: string;
}

interface TimelineEntry {
  role: string;
  when: string;
  body: string;
}

@Component({
  selector: 'app-record',
  imports: [RevealDirective, EventsComponent],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss',
})
export class RecordComponent {
  ledger: LedgerLine[] = [
    { n: '221', what: 'stories delivered across 19 quarters' },
    { n: '546', what: 'peer pull requests reviewed — 306 in 2026 alone' },
    { n: '65', what: 'repositories touched: Angular, Java services, data pipelines' },
    { n: '33', what: 'internal engineering guides written and kept as team reference' },
    { n: '418', what: 'story points delivered, 65% of stories scoped at 2\u20133 points' },
    { n: '24', what: 'features demoed to the team across 19 quarters' },
  ];

  timeline: TimelineEntry[] = [
    {
      role: 'Associate Software Engineer, Surescripts',
      when: 'Mar 2022 — now',
      body: 'Full-stack delivery on a national healthcare data platform, plus release management: 23 branches cut, SYSTEST deployments and regression pipelines coordinated through to production.',
    },
    {
      role: 'Software Engineer, Tata Consultancy Services',
      when: 'Jan 2021 — Mar 2022',
      body: 'Full-stack web applications in Agile teams — Angular, Java, Spring Boot, REST — through the firm’s full-stack engineering program.',
    },
    {
      role: 'B.S. Information Systems, Coastal Carolina University',
      when: '2020',
      body: 'Systems, data, and the software that connects them.',
    },
    {
      role: 'Study abroad, Mahidol University International College',
      when: '2019',
      body: 'A semester in Thailand — and the reason a travel planner is the app I most wanted to build.',
    },
  ];
}
