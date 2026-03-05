import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';
import { ThemeService } from '../../core/services/theme.service';
import { By } from '@angular/platform-browser';

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;
  let themeServiceSpy: jasmine.SpyObj<ThemeService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ThemeService', ['alternarTema'], {
      isDarkMode: false,
      isLightMode: true,
    });

    await TestBed.configureTestingModule({
      imports: [ThemeToggleComponent],
      providers: [
        { provide: ThemeService, useValue: spy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
    themeServiceSpy = TestBed.inject(ThemeService) as jasmine.SpyObj<ThemeService>;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve mostrar ícone de dark_mode quando em tema claro', () => {
    themeServiceSpy.isDarkMode.and.returnValue(false);
    themeServiceSpy.isLightMode.and.returnValue(true);
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('mat-icon'));
    expect(iconElement.nativeElement.textContent.trim()).toBe('dark_mode');
  });

  it('deve mostrar ícone de light_mode quando em tema escuro', () => {
    themeServiceSpy.isDarkMode.and.returnValue(true);
    themeServiceSpy.isLightMode.and.returnValue(false);
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('mat-icon'));
    expect(iconElement.nativeElement.textContent.trim()).toBe('light_mode');
  });

  it('deve mostrar tooltip "Mudar para tema escuro" quando em tema claro', () => {
    themeServiceSpy.isDarkMode.and.returnValue(false);
    themeServiceSpy.isLightMode.and.returnValue(true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.attributes['ng-reflect-mat-tooltip']).toBe('Mudar para tema escuro');
  });

  it('deve mostrar tooltip "Mudar para tema claro" quando em tema escuro', () => {
    themeServiceSpy.isDarkMode.and.returnValue(true);
    themeServiceSpy.isLightMode.and.returnValue(false);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.attributes['ng-reflect-mat-tooltip']).toBe('Mudar para tema claro');
  });

  it('deve chamar themeService.alternarTema() quando clicado', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);

    expect(themeServiceSpy.alternarTema).toHaveBeenCalledTimes(1);
  });

  it('deve ter atributo aria-label correto', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.attributes['aria-label']).toBe('Alternar tema');
  });

  it('deve ter mat-icon-button directive', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.attributes['ng-reflect-mat-icon-button']).toBe('');
  });

  it('deve ter matTooltipPosition definido como "below"', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.attributes['ng-reflect-mat-tooltip-position']).toBe('below');
  });
});
