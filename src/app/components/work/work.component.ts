import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface WorkItem {
  n: string;
  title: string;
  body: string;
  meta: string;
  stat: string;
}

@Component({
  selector: 'app-work',
  imports: [RevealDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  work: WorkItem[] = [
    {
      n: '01',
      title: 'A configuration interface, spike to production',
      body: 'A national healthcare data platform needed a new way to manage service configuration. I wrote the UX design spike, then shipped 12 of the 15 stories the spike turned into — Angular front end and the Java microservice under it.',
      meta: 'Owned end to end',
      stat: '12 of 15 stories',
    },
    {
      n: '02',
      title: 'Scoping the work, not just shipping it',
      body: 'In 2025 I averaged 19.8 story points a quarter. Through the first three quarters of 2026 it is 40, average story completion is down from 7 days to 4, and Q3 2026 is the most productive quarter yet at 29 stories and 46 points. What changed is where I sit in the work: 32 technical spikes to pin down unknowns before the team commits, and since August 2026, 11 Jira stories of my own, 9 of them written for other developers to pick up.',
      meta: '2025 \u2192 2026',
      stat: '19.8 \u2192 40 points a quarter',
    },
    {
      n: '03',
      title: 'The outage that traced back to a default',
      body: 'Patient record search went down. I led the root cause analysis to an unsafe configuration default letting production reach a development database, audited 40+ service configs, found a second unreported instance nobody had hit yet, and shipped both fixes.',
      meta: 'Incident response',
      stat: '40+ configs audited',
    },
    {
      n: '04',
      title: 'rb-create, so nobody cuts a branch by hand',
      body: 'Release-branch automation published to the team’s internal GitHub marketplace. What was a manual checklist across 23 release branches became a repeatable workflow that proves regressions are clean before the branch exists.',
      meta: 'Internal tooling',
      stat: '23 branches, 8 quarters',
    },
  ];
}
