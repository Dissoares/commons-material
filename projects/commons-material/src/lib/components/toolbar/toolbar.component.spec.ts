import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
  });

  it('deve renderizar título e subtítulo quando informados', (): void => {
    fixture.componentRef.setInput('titulo', 'Portal Corporativo');
    fixture.componentRef.setInput('subtitulo', 'Ambiente multiempresa');
    fixture.detectChanges();

    const titulo = fixture.nativeElement.querySelector('.cm-toolbar__titulo') as HTMLElement;
    const subtitulo = fixture.nativeElement.querySelector('.cm-toolbar__subtitulo') as HTMLElement;

    expect(titulo.textContent?.trim()).toBe('Portal Corporativo');
    expect(subtitulo.textContent?.trim()).toBe('Ambiente multiempresa');
  });

  it('deve aplicar modo denso quando ativado', (): void => {
    fixture.componentRef.setInput('densa', true);
    fixture.detectChanges();

    const toolbar = fixture.nativeElement.querySelector('.cm-toolbar') as HTMLElement;

    expect(toolbar.classList.contains('cm-toolbar--densa')).toBeTrue();
  });
});
