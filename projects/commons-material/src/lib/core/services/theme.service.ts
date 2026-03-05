import { Injectable, signal, computed, effect } from '@angular/core';
import { ModoTemaCommonsMaterial } from '../../tokens/css-vars';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

export const CHAVE_TEMA_LOCALSTORAGE: string = 'cm-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly _temaAtual = signal<ModoTemaCommonsMaterial>('light');
  public readonly temaAtual = this._temaAtual.asReadonly();
  public readonly isDarkMode = computed(() => this._temaAtual() === 'dark');
  public readonly isLightMode = computed(() => this._temaAtual() === 'light');

  constructor() {
    this.inicializarTema();

    effect(() => {
      this.aplicarTema(this._temaAtual());
    });
  }

  public alternarTema(): void {
    const novoTema = this._temaAtual() === 'light' ? 'dark' : 'light';
    this.definirTema(novoTema);
  }

  public definirTema(tema: ModoTemaCommonsMaterial): void {
    this._temaAtual.set(tema);
    this.salvarTemaNoLocalStorage(tema);
  }

  private inicializarTema(): void {
    const temaSalvo = this.obterTemaDoLocalStorage();
    const temaSistema = this.obterPreferenciaDoSistema();

    const temaInicial = temaSalvo || temaSistema;
    this._temaAtual.set(temaInicial);
  }

  private aplicarTema(tema: ModoTemaCommonsMaterial): void {
    const htmlElement = this.document.documentElement;

    if (tema === 'dark') {
      htmlElement.classList.add('cm-tema-escuro');
      htmlElement.setAttribute('data-cm-theme', 'dark');
    } else {
      htmlElement.classList.remove('cm-tema-escuro');
      htmlElement.setAttribute('data-cm-theme', 'light');
    }
  }

  private obterTemaDoLocalStorage(): ModoTemaCommonsMaterial | null {
    try {
      const temaSalvo = localStorage.getItem(CHAVE_TEMA_LOCALSTORAGE);
      return temaSalvo === 'dark' || temaSalvo === 'light' ? temaSalvo : null;
    } catch {
      return null;
    }
  }

  private salvarTemaNoLocalStorage(tema: ModoTemaCommonsMaterial): void {
    localStorage.setItem(CHAVE_TEMA_LOCALSTORAGE, tema);
  }

  private obterPreferenciaDoSistema(): ModoTemaCommonsMaterial {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }
}
