import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hobby {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  tagColor?: 'purple' | 'teal' | 'coral';
}

@Component({
  selector: 'app-outside-the-ide',
  imports: [CommonModule],
  templateUrl: './outside-the-ide.component.html',
  styleUrl: './outside-the-ide.component.scss'
})
export class OutsideTheIdeComponent {
  hobbies: Hobby[] = [
    {
      emoji: '🎮',
      title: 'Cap & Asher',
      subtitle: 'Game Design · Unreal Engine 5 · ELVTR Course',
      description: 'A third-person cozy cat adventure where you play as cats investigating a missing necklace before your human\'s big event. Explore a familiar home as a safe hub, then dive into hidden pocket micro-worlds — a bathtub floating market, a blanket bazaar — solving light puzzles and following clues through charming, imaginative spaces.',
      tag: 'In Progress',
      tagColor: 'purple',
    },
    {
      emoji: '🎮',
      title: 'Loftia',
      subtitle: 'Indie Game · Alpha & Beta Tester',
      description: 'A cyberpunk-earthy indie game I\'ve followed from the beginning — I became an alpha play tester and will be part of the upcoming beta, too.',
      tag: 'In Progress',
      tagColor: 'purple',
    },
    {
      emoji: '✈️',
      title: 'Private Pilot',
      subtitle: 'Flight Training · 2022 – 2023',
      description: 'Completed private pilot training — one of the most technically demanding and rewarding things I\'ve done. Flying sharpened my focus, decision-making under pressure, and ability to stay calm when things get complex. Skills that carry over more than you\'d think.',
      tag: 'Licensed',
      tagColor: 'teal',
    },
    {
      emoji: '🌍',
      title: 'World Traveler',
      subtitle: '24 Countries · 26 U.S. States & Counting',
      description: 'Exploring different cultures, systems, and ways of life fuels how I think about building products. Spending time studying abroad in Thailand at Mahidol University was a formative experience — and the travel bug has never let up since.',
      tagColor: 'coral',
    },
    {
      emoji: '🌱',
      title: 'Always Trying Something New',
      subtitle: 'Hobbies & Interests',
      description: 'Whether it\'s vibe coding a side project, woodworking, gardening, arts & crafts, making travel videos, deep-diving into personal finance, or planning the next adventure — I\'m happiest when I\'m building or exploring something.',
    },
  ];
}
