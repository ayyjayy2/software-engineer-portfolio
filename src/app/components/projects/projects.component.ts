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
      description: 'A visual, interactive travel planning app for logistics, budgeting, and itineraries.',
      details: [
        'Real-time data syncing for collaborative trip planning',
        'Expense tracking with budget visualization',
        'Map-based UI for route and activity planning',
      ],
      tags: ['Angular', 'Firebase', 'TypeScript', 'Maps API'],
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
