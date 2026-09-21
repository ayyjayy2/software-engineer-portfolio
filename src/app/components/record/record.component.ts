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
    { n: '546', what: 'peer pull requests reviewed — 306 in 2026, 161 more than all of 2025' },
    { n: '65', what: 'repositories touched: Angular, Java services, data pipelines' },
    { n: '33', what: 'internal engineering guides written as standing team reference — several adopted by other teams too' },
    { n: '418', what: 'story points delivered, 65% of stories scoped at 2\u20133 points' },
    { n: '24', what: 'features demoed across 19 quarters — 10 of them in 2026, already past all of 2025' },
    { n: '7→4', what: 'days average story completion, 2025 to 2026' },
  ];

  timeline: TimelineEntry[] = [
    {
      role: 'Associate Software Engineer, Surescripts',
      when: 'Mar 2022 — now',
      body: 'Full-stack engineer on the demographic patient matching team behind a national healthcare data platform. Angular features such as configuration viewers, audit search, data tables and navigation; Java microservices, REST APIs and service integrations; and the data ingestion and file-processing pipelines underneath, across 65 repositories.',
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
      body: 'A semester in Thailand spent learning how differently things can be done and seen. That curiosity stuck, and years later it turned into building a travel planner of my own.',
    },
  ];
}
