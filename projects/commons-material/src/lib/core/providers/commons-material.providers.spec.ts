import {
  type MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {
  type MatTooltipDefaultOptions,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, type MatSnackBarConfig } from '@angular/material/snack-bar';
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
    const formField = TestBed.inject<MatFormFieldDefaultOptions>(MAT_FORM_FIELD_DEFAULT_OPTIONS);
    const tooltip = TestBed.inject<MatTooltipDefaultOptions>(MAT_TOOLTIP_DEFAULT_OPTIONS);
    const snackbar = TestBed.inject<MatSnackBarConfig>(MAT_SNACK_BAR_DEFAULT_OPTIONS);

    expect(ripple.disabled).toBeFalse();
    expect(config.desabilitarOndulacao).toBeFalse();
    expect(config.aparenciaCampoFormulario).toBe('outline');
    expect(formField.appearance).toBe('outline');
    expect(formField.subscriptSizing).toBe('fixed');
    expect(tooltip.showDelay).toBe(300);
    expect(snackbar.duration).toBe(4000);
    expect(snackbar.horizontalPosition).toBe('end');
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

  it('deve aplicar customizações globais de UX', (): void => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        ...proverCommonsMaterial({
          aparenciaCampoFormulario: 'fill',
          esconderMarcadorObrigatorio: true,
          subscriptSizingCampoFormulario: 'dynamic',
          tooltipMostrarDelayMs: 600,
          snackbarDuracaoMs: 2000,
        }),
      ],
    });

    const formField = TestBed.inject<MatFormFieldDefaultOptions>(MAT_FORM_FIELD_DEFAULT_OPTIONS);
    const tooltip = TestBed.inject<MatTooltipDefaultOptions>(MAT_TOOLTIP_DEFAULT_OPTIONS);
    const snackbar = TestBed.inject<MatSnackBarConfig>(MAT_SNACK_BAR_DEFAULT_OPTIONS);

    expect(formField.appearance).toBe('fill');
    expect(formField.hideRequiredMarker).toBeTrue();
    expect(formField.subscriptSizing).toBe('dynamic');
    expect(tooltip.showDelay).toBe(600);
    expect(snackbar.duration).toBe(2000);
  });
});
