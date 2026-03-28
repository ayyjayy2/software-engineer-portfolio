import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  private phrases = [
    'Full-Stack Engineer',
    'Angular Developer',
    'Product Engineer',
    'UI/UX Enthusiast',
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private type() {
    const current = this.phrases[this.phraseIndex];
    if (this.deleting) {
      this.displayText.set(current.substring(0, this.charIndex--));
    } else {
      this.displayText.set(current.substring(0, this.charIndex++));
    }

    let delay = this.deleting ? 50 : 90;

    if (!this.deleting && this.charIndex > current.length) {
      delay = 1800;
      this.deleting = true;
    } else if (this.deleting && this.charIndex < 0) {
      this.deleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.charIndex = 0;
      delay = 300;
    }

    this.timer = setTimeout(() => this.type(), delay);
  }
}
