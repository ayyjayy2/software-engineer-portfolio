import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  details: string[];
  tags: string[];
  github: string;
  demo?: string;
  accent: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Ireland Trip Planner',
      description: 'A collaborative travel planning app with outfit packing, live weather, and shared expense splitting.',
      details: [
        'Outfit planning page with live weather, listed activities, and outfit images per day',
        'Expense splitting across multiple users with multi-currency support',
        'Real-time data syncing for collaborative trip planning',
      ],
      tags: ['Angular', 'Firebase', 'TypeScript', 'Maps API', 'Weather API'],
      github: 'https://github.com/ayyjayy2/ireland-startricks',
      demo: 'https://ireland-stpatricks.web.app/select-user',
      accent: '#7c63ff',
    },
    {
      name: 'Persian Path',
      description: 'An interactive language learning app with quizzes, audio, and cultural content.',
      details: [
        'Focused on intuitive UI and engaging user experience',
        'Audio integration for pronunciation learning',
        'Cultural context woven into lesson content',
      ],
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/ayyjayy2/persian-path',
      accent: '#00d4aa',
    },
  ];
}
