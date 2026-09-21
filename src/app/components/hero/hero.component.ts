import { Component } from '@angular/core';

interface Fact {
  label: string;
  value: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  facts: Fact[] = [
    { label: 'In the industry', value: 'Since 2021' },
    { label: 'Based in', value: 'Chicago, IL' },
    { label: 'Open to', value: 'Remote or hybrid' },
    { label: 'Stack', value: 'Angular · Java · Firebase' },
  ];
}
