import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface StackGroup {
  name: string;
  items: string;
}

@Component({
  selector: 'app-craft',
  imports: [RevealDirective],
  templateUrl: './craft.component.html',
  styleUrl: './craft.component.scss',
})
export class CraftComponent {
  stacks: StackGroup[] = [
    { name: 'Languages', items: 'Java, TypeScript, JavaScript, SQL, HTML/CSS' },
    { name: 'Frontend', items: 'Angular, RxJS, React, React Native, PWAs and service workers, design systems' },
    { name: 'Backend', items: 'Spring Boot, REST APIs, microservices, Firebase and Firestore, auth and security rules' },
    { name: 'Data & delivery', items: 'Oracle SQL, GCP BigQuery, Jenkins CI/CD, release management, regression testing' },
    { name: 'Daily', items: 'Git, Jira, Swagger, Insomnia, Firebase emulator, Claude Code, Copilot' },
  ];
}
