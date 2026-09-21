import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

@Component({
  selector: 'app-hello',
  imports: [RevealDirective],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
  links: ContactLink[] = [
    { label: 'Email', value: 'alaynajohnston12@gmail.com', href: 'mailto:alaynajohnston12@gmail.com', external: false },
    { label: 'LinkedIn', value: 'in/alaynajohnston98', href: 'https://linkedin.com/in/alaynajohnston98', external: true },
    { label: 'GitHub', value: 'ayyjayy2', href: 'https://github.com/ayyjayy2', external: true },
    { label: 'Résumé', value: 'Download', href: 'Alayna-Johnston-Resume.pdf', external: true },
  ];
}
