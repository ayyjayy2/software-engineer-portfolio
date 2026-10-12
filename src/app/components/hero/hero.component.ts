import { Component } from '@angular/core';
import { ScrollToDirective } from '../../directives/scroll-to.directive';

interface Fact {
  label: string;
  value: string;
}

@Component({
  imports: [ScrollToDirective],
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  facts: Fact[] = [
    { label: 'In the industry', value: 'Since 2021' },
    { label: 'Based in', value: 'Chicago, IL' },
    { label: 'Open to', value: 'Remote roles' },
    { label: 'Stack', value: 'Angular · Java · Firebase' },
  ];
}
