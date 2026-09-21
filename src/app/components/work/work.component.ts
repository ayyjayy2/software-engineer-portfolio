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
      body: 'Ran 32 technical spikes to pin down unknowns before the team committed, then started writing the stories myself: 11 authored, 9 of them scoped for other engineers to pick up. Over the same stretch my quarterly output doubled from 19.8 to 40 story points and average story completion fell from 7 days to 4.',
      meta: 'Ownership, year over year',
      stat: '32 spikes \u00b7 11 stories authored',
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
