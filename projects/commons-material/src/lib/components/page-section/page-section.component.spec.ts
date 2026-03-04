import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSectionComponent } from './page-section.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PageSectionComponent', () => {
  let fixture: ComponentFixture<PageSectionComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [PageSectionComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSectionComponent);
  });

  it('deve renderizar o título informado', (): void => {
    fixture.componentRef.setInput('titulo', 'Seção principal');
    fixture.detectChanges();

    const titulo = fixture.nativeElement.querySelector('.cm-page-section__title') as HTMLElement;

    expect(titulo.textContent?.trim()).toBe('Seção principal');
  });

  it('não deve renderizar subtítulo quando vazio', (): void => {
    fixture.componentRef.setInput('titulo', 'Seção principal');
    fixture.detectChanges();

    const subtitulo = fixture.nativeElement.querySelector('.cm-page-section__subtitle');

    expect(subtitulo).toBeNull();
  });

  it('deve renderizar subtítulo quando informado', (): void => {
    fixture.componentRef.setInput('titulo', 'Seção principal');
    fixture.componentRef.setInput('subtitulo', 'Contexto adicional');
    fixture.detectChanges();

    const subtitulo = fixture.nativeElement.querySelector(
      '.cm-page-section__subtitle',
    ) as HTMLElement;

    expect(subtitulo.textContent?.trim()).toBe('Contexto adicional');
  });
});
