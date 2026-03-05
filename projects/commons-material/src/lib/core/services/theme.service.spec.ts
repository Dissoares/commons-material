import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let localStorageMock: { [key: string]: string };
  let matchMediaMock: jasmine.Spy;

  beforeEach(() => {
    localStorageMock = {};

    matchMediaMock = spyOn(window, 'matchMedia').and.returnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jasmine.createSpy('addListener'),
      removeListener: jasmine.createSpy('removeListener'),
      addEventListener: jasmine.createSpy('addEventListener'),
      removeEventListener: jasmine.createSpy('removeEventListener'),
      dispatchEvent: jasmine.createSpy('dispatchEvent'),
    });

    spyOn(window.localStorage, 'getItem').and.callFake((key: string) => localStorageMock[key]);
    spyOn(window.localStorage, 'setItem').and.callFake((key: string, value: string) => {
      localStorageMock[key] = value;
    });

    TestBed.configureTestingModule({
      providers: [ThemeService],
    });

    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    (window.localStorage.getItem as jasmine.Spy).calls.reset();
    (window.localStorage.setItem as jasmine.Spy).calls.reset();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve inicializar com tema light por padrão', () => {
    expect(service.temaAtual()).toBe('light');
    expect(service.isLightMode()).toBe(true);
    expect(service.isDarkMode()).toBe(false);
  });

  it('deve alternar para tema escuro', () => {
    service.alternarTema();

    expect(service.temaAtual()).toBe('dark');
    expect(service.isDarkMode()).toBe(true);
    expect(service.isLightMode()).toBe(false);
  });

  it('deve alternar de volta para tema claro', () => {
    service.alternarTema(); // Para dark
    service.alternarTema(); // Para light

    expect(service.temaAtual()).toBe('light');
    expect(service.isLightMode()).toBe(true);
  });

  it('deve definir tema explicitamente', () => {
    service.definirTema('dark');
    expect(service.temaAtual()).toBe('dark');

    service.definirTema('light');
    expect(service.temaAtual()).toBe('light');
  });

  it('deve salvar tema no localStorage', () => {
    service.definirTema('dark');

    expect(window.localStorage.setItem).toHaveBeenCalledWith('cm-theme', 'dark');
  });

  it('deve recuperar tema do localStorage', () => {
    localStorageMock['cm-theme'] = 'dark';

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);

    expect(service.temaAtual()).toBe('dark');
  });

  it('deve usar preferência do sistema quando não há tema salvo', () => {
    matchMediaMock.and.returnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jasmine.createSpy('addListener'),
      removeListener: jasmine.createSpy('removeListener'),
      addEventListener: jasmine.createSpy('addEventListener'),
      removeEventListener: jasmine.createSpy('removeEventListener'),
      dispatchEvent: jasmine.createSpy('dispatchEvent'),
    });

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);

    expect(service.temaAtual()).toBe('dark');
  });

  it('deve ignorar valores inválidos no localStorage', () => {
    localStorageMock['cm-theme'] = 'invalid';

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);

    expect(service.temaAtual()).toBe('light');
  });

  it('deve lidar com erros do localStorage gracefully', () => {
    spyOn(window.localStorage, 'setItem').and.throwError('localStorage not available');

    expect(() => {
      service.definirTema('dark');
    }).not.toThrow();
  });
});
