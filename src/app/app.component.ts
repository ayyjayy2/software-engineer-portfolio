import { Component } from '@angular/core';
import { APP_VERSION } from './version';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoComponent } from './components/demo/demo.component';
import { WorkComponent } from './components/work/work.component';
import { RecordComponent } from './components/record/record.component';
import { CraftComponent } from './components/craft/craft.component';
import { OffTheClockComponent } from './components/off-the-clock/off-the-clock.component';
import { HelloComponent } from './components/hello/hello.component';
import { TrackSectionDirective } from './directives/track-section.directive';

@Component({
  selector: 'app-root',
  imports: [
    TopbarComponent,
    HeroComponent,
    NavComponent,
    DemoComponent,
    WorkComponent,
    RecordComponent,
    CraftComponent,
    OffTheClockComponent,
    HelloComponent,
    TrackSectionDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly version = APP_VERSION;
}
