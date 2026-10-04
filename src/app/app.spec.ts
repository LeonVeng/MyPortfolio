import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize with correct default title and closed mobile menu', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title()).toContain('Léon DU');
    expect(app.title()).toContain('Full-Stack');
    expect(app.isMobileMenuOpen()).toBe(false);
  });

  it('should toggle and close mobile menu', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.toggleMobileMenu();
    expect(app.isMobileMenuOpen()).toBe(true);

    app.closeMobileMenu();
    expect(app.isMobileMenuOpen()).toBe(false);
  });

  it('should render the main hero heading and 6 key sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('architectures fiables');
    expect(compiled.querySelector('#accueil')).toBeTruthy();
    expect(compiled.querySelector('#a-propos')).toBeTruthy();
    expect(compiled.querySelector('#parcours')).toBeTruthy();
    expect(compiled.querySelector('#competences')).toBeTruthy();
    expect(compiled.querySelector('#projets')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();

    // Vérification des 3 projets spécifiés
    expect(compiled.textContent).toContain('P7 — CI/CD');
    expect(compiled.textContent).toContain('P8 — Encadrement');
    expect(compiled.textContent).toContain('P10 — Your Car Your Way');

    // Vérification des informations de contact
    expect(compiled.textContent).toContain('Du.leon@yahoo.fr');
  });
});
