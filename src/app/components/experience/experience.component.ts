import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Role {
  company: string;
  title: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  roles: Role[] = [
    {
      company: 'Surescript, LLC',
      title: 'Associate Software Engineer',
      period: 'Mar 2022 – Present',
      type: 'Remote',
      current: true,
      bullets: [
        'Led development of Angular + Java micro-site used across teams',
        'Partnered with Product Owner to deliver user-facing features in Agile workflows',
        'Built fast, interactive UI for exploring large-scale datasets',
        'Created reusable components and scalable backend patterns',
        'Engineered systems processing 100M+ records daily',
        'Owned features end-to-end from idea to deployment',
        'Leveraged AI tools (Claude, Copilot) to increase productivity and iteration speed',
      ],
      tags: ['Angular', 'Java', 'Spring Boot', 'REST APIs', 'Agile'],
    },
    {
      company: 'Tata Consultancy Services',
      title: 'Software Engineer',
      period: 'Jan 2021 – Mar 2022',
      type: 'Remote',
      bullets: [
        'Full-stack training program covering Angular, Java, Spring Boot, and REST APIs',
        'Built web applications in collaborative Agile team environments',
      ],
      tags: ['Angular', 'Java', 'Spring Boot', 'REST APIs'],
    },
  ];
}
