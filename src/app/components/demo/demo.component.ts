import { Component } from '@angular/core';
import { PhoneFrameComponent, ITINERISTS_URL } from '../phone-frame/phone-frame.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-demo',
  imports: [PhoneFrameComponent, RevealDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  readonly appUrl = ITINERISTS_URL;
}
