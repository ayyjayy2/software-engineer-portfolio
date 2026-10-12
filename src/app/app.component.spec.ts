import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_VERSION } from './version';
import { BUILD_DATE } from './build-info';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('renders the app version in the footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer .footer-version')?.textContent).toContain(`v${APP_VERSION}`);
  });

  it('renders the build date in the footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer')?.textContent).toContain(`Last updated ${BUILD_DATE}`);
    expect(BUILD_DATE).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/);
  });
});
