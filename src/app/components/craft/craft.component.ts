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
    { name: 'Frontend', items: 'Angular, TypeScript, RxJS, HTML/CSS, design systems, PWAs and service workers' },
    { name: 'Backend', items: 'Java, Spring Boot, REST APIs, microservices, Firebase and Firestore with auth and security rules' },
    { name: 'Data & delivery', items: 'Oracle SQL, GCP BigQuery, data ingestion pipelines, Jenkins CI/CD, release management, unit and regression testing' },
    { name: 'Weekly', items: 'Git, GitHub, Jira, Swagger, Insomnia, Firebase emulator, PowerShell, Claude Code, Copilot' },
  ];
}
