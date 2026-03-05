import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { InjectionToken, Provider } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';

export interface ConfiguracaoCommonsMaterial {
  desabilitarOndulacao?: boolean;
  aparenciaCampoFormulario?: 'outline' | 'fill';
  esconderMarcadorObrigatorio?: boolean;
  subscriptSizingCampoFormulario?: 'fixed' | 'dynamic';
  tooltipMostrarDelayMs?: number;
  snackbarDuracaoMs?: number;
}

export const CONFIGURACAO_COMMONS_MATERIAL: InjectionToken<ConfiguracaoCommonsMaterial> =
  new InjectionToken<ConfiguracaoCommonsMaterial>('CONFIGURACAO_COMMONS_MATERIAL');

const CONFIGURACAO_PADRAO_COMMONS_MATERIAL: Required<ConfiguracaoCommonsMaterial> = {
  desabilitarOndulacao: false,
  aparenciaCampoFormulario: 'outline',
  esconderMarcadorObrigatorio: false,
  subscriptSizingCampoFormulario: 'fixed',
  tooltipMostrarDelayMs: 300,
  snackbarDuracaoMs: 4000,
};

export function proverCommonsMaterial(config: ConfiguracaoCommonsMaterial = {}): Provider[] {
  const configuracaoFinal: Required<ConfiguracaoCommonsMaterial> = {
    ...CONFIGURACAO_PADRAO_COMMONS_MATERIAL,
    ...config,
  };

  const rippleConfig: RippleGlobalOptions = {
    disabled: configuracaoFinal.desabilitarOndulacao,
  };

  const formFieldConfig: MatFormFieldDefaultOptions = {
    appearance: configuracaoFinal.aparenciaCampoFormulario,
    hideRequiredMarker: configuracaoFinal.esconderMarcadorObrigatorio,
    subscriptSizing: configuracaoFinal.subscriptSizingCampoFormulario,
  };

  const tooltipConfig: MatTooltipDefaultOptions = {
    showDelay: configuracaoFinal.tooltipMostrarDelayMs,
    hideDelay: 0,
    touchendHideDelay: 1500,
    touchGestures: 'auto',
  };

  const snackbarConfig: MatSnackBarConfig = {
    duration: configuracaoFinal.snackbarDuracaoMs,
    horizontalPosition: 'end',
    verticalPosition: 'top',
  };

  return [
    { provide: CONFIGURACAO_COMMONS_MATERIAL, useValue: configuracaoFinal },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: rippleConfig },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: formFieldConfig },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipConfig },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: snackbarConfig },
  ];
}
