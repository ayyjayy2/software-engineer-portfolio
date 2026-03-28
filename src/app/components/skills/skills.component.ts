import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      icon: '{ }',
      skills: ['TypeScript', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS / SCSS'],
    },
    {
      category: 'Frontend',
      icon: '⬡',
      skills: ['Angular', 'RxJS', 'Angular Material', 'Responsive Design', 'UI Architecture', 'REST API Integration'],
    },
    {
      category: 'Backend',
      icon: '⚙',
      skills: ['Spring Boot', 'REST APIs', 'Microservices', 'Java EE'],
    },
    {
      category: 'AI & Tools',
      icon: '✦',
      skills: ['Claude Code', 'GitHub Copilot', 'ChatGPT', 'Git', 'GitHub', 'Swagger', 'Jira'],
    },
    {
      category: 'Practices',
      icon: '◈',
      skills: ['Agile / Scrum', 'Product Collaboration', 'End-to-End Ownership', 'Code Review', 'Large-Scale Data Systems'],
    },
  ];
}
