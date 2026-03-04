import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { InjectionToken, Provider } from '@angular/core';
export interface ConfiguracaoCommonsMaterial {
  desabilitarOndulacao?: boolean;
}

export const CONFIGURACAO_COMMONS_MATERIAL: InjectionToken<ConfiguracaoCommonsMaterial> =
  new InjectionToken<ConfiguracaoCommonsMaterial>('CONFIGURACAO_COMMONS_MATERIAL');

export function proverCommonsMaterial(config: ConfiguracaoCommonsMaterial = {}): Provider[] {
  const rippleConfig: RippleGlobalOptions = {
    disabled: config.desabilitarOndulacao ?? false,
  };

  return [
    { provide: CONFIGURACAO_COMMONS_MATERIAL, useValue: config },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: rippleConfig },
  ];
}
