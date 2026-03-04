import { cmCoresDark, cmCoresLight, cmRaio, cmEspacamento } from './design-tokens';

export type ModoTemaCommonsMaterial = 'light' | 'dark';

export function construirVariaveisCssCommonsMaterial(
  modo: ModoTemaCommonsMaterial = 'light',
): Record<string, string> {
  const cores = modo === 'dark' ? cmCoresDark : cmCoresLight;

  return {
    ...cmEspacamento,
    ...cmRaio,
    ...cores,
  };
}

export function construirVariaveisCssTemasCommonsMaterial(): Record<
  ModoTemaCommonsMaterial,
  Record<string, string>
> {
  return {
    light: construirVariaveisCssCommonsMaterial('light'),
    dark: construirVariaveisCssCommonsMaterial('dark'),
  };
}

export const buildCommonsMaterialCssVars: () => Record<string, string> =
  construirVariaveisCssCommonsMaterial;
