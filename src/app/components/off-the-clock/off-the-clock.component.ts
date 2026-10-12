import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Pursuit {
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
}

@Component({
  selector: 'app-off-the-clock',
  imports: [RevealDirective],
  templateUrl: './off-the-clock.component.html',
  styleUrl: './off-the-clock.component.scss',
})
export class OffTheClockComponent {
  pursuits: Pursuit[] = [
    {
      title: 'Loftia',
      subtitle: 'Indie game · playtester every round so far',
      description: 'A cyberpunk-earthy indie game I’ve followed from the beginning and playtested in every round so far: 26 bugs filed in the first round, 14 in the latest.',
      tag: 'Playtester',
    },
    {
      title: 'Private pilot',
      subtitle: 'Flight training · 2022 – 2023',
      description: 'Completed private pilot training — one of the most technically demanding and rewarding things I’ve done. Flying sharpened my focus, decision-making under pressure, and ability to stay calm when things get complex. Skills that carry over more than you’d think.',
      tag: 'Licensed',
    },
    {
      title: 'World traveler',
      subtitle: '25 countries · 26 U.S. states & counting',
      description: 'Exploring different cultures, systems, and ways of life fuels how I think about building products. Spending time studying abroad in Thailand at Mahidol University was a formative experience — and the travel bug has never let up since.',
    },
    {
      title: 'Always trying something new',
      subtitle: 'Hobbies & interests',
      description: 'Whether it’s vibe coding a side project, woodworking, gardening, arts & crafts, making travel videos, deep-diving into personal finance, or planning the next adventure — I’m happiest when I’m building or exploring something.',
    },
  ];
}
