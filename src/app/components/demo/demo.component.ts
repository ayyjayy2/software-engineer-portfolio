import { Component } from '@angular/core';
import { PhoneFrameComponent } from '../phone-frame/phone-frame.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-demo',
  imports: [PhoneFrameComponent, RevealDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  readonly repoUrl = 'https://github.com/ayyjayy2/the-itinerists';
}
