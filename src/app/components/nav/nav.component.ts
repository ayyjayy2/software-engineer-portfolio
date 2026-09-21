import { Component } from '@angular/core';

interface NavLink {
  n: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  links: NavLink[] = [
    { n: '01', label: 'The app', href: '#demo' },
    { n: '02', label: 'Work', href: '#work' },
    { n: '03', label: 'Record', href: '#record' },
    { n: '04', label: 'Craft', href: '#craft' },
    { n: '05', label: 'Off the clock', href: '#off-the-clock' },
    { n: '06', label: 'Hello', href: '#hello' },
  ];
}
