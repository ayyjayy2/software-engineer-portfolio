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
      skills: ['Angular', 'Responsive Design', 'UI Architecture', 'REST APIs'],
    },
    {
      category: 'Backend',
      icon: '⚙',
      skills: ['Spring Boot', 'REST APIs', 'Microservices', 'Java'],
    },
    {
      category: 'AI & Tools',
      icon: '✦',
      skills: ['Claude Code', 'Copilot', 'ChatGPT', 'Git', 'GitHub', 'Swagger', 'Jira', 'Confluence'],
    },
    {
      category: 'DevOps & Testing',
      icon: '▲',
      skills: ['Jenkins', 'Insomnia'],
    },
    {
      category: 'Practices',
      icon: '◈',
      skills: ['Agile / Scrum', 'Product Collaboration', 'Code Review', 'Large-Scale Data Systems'],
    },
  ];
}
