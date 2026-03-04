import { CONFIGURACAO_COMMONS_MATERIAL, proverCommonsMaterial } from './commons-material.providers';
import { MAT_RIPPLE_GLOBAL_OPTIONS, type RippleGlobalOptions } from '@angular/material/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('proverCommonsMaterial', () => {
  it('deve prover configuração padrão com ondulação habilitada', (): void => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), ...proverCommonsMaterial()],
    });

    const ripple = TestBed.inject<RippleGlobalOptions>(MAT_RIPPLE_GLOBAL_OPTIONS);
    const config = TestBed.inject(CONFIGURACAO_COMMONS_MATERIAL);

    expect(ripple.disabled).toBeFalse();
    expect(config.desabilitarOndulacao).toBeUndefined();
  });

  it('deve desabilitar ondulação quando configurado', (): void => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        ...proverCommonsMaterial({ desabilitarOndulacao: true }),
      ],
    });

    const ripple = TestBed.inject<RippleGlobalOptions>(MAT_RIPPLE_GLOBAL_OPTIONS);
    const config = TestBed.inject(CONFIGURACAO_COMMONS_MATERIAL);

    expect(ripple.disabled).toBeTrue();
    expect(config.desabilitarOndulacao).toBeTrue();
  });
});
