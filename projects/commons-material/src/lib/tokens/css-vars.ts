import { cmRaio, cmEspacamento } from './design-tokens';

export function construirVariaveisCssCommonsMaterial(): Record<string, string> {
  return {
    ...cmEspacamento,
    ...cmRaio,
  };
}

export const buildCommonsMaterialCssVars: () => Record<string, string> =
  construirVariaveisCssCommonsMaterial;
