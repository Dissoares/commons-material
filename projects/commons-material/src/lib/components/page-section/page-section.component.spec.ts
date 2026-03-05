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

    const titulo = fixture.nativeElement.querySelector('.cm-secao-pagina__titulo') as HTMLElement;

    expect(titulo.textContent?.trim()).toBe('Seção principal');
  });

  it('não deve renderizar subtítulo quando vazio', (): void => {
    fixture.componentRef.setInput('titulo', 'Seção principal');
    fixture.detectChanges();

    const subtitulo = fixture.nativeElement.querySelector('.cm-secao-pagina__subtitulo');

    expect(subtitulo).toBeNull();
  });

  it('deve renderizar subtítulo quando informado', (): void => {
    fixture.componentRef.setInput('titulo', 'Seção principal');
    fixture.componentRef.setInput('subtitulo', 'Contexto adicional');
    fixture.detectChanges();

    const subtitulo = fixture.nativeElement.querySelector(
      '.cm-secao-pagina__subtitulo',
    ) as HTMLElement;

    expect(subtitulo.textContent?.trim()).toBe('Contexto adicional');
  });
});
