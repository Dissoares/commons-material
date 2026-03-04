export type TokenEspacamento =
  | 'cm-space-1'
  | 'cm-space-2'
  | 'cm-space-3'
  | 'cm-space-4'
  | 'cm-space-5'
  | 'cm-space-6';

export type TokenRaio = 'cm-radius-sm' | 'cm-radius-md' | 'cm-radius-lg';

export type TokenCor =
  | 'cm-color-bg-page'
  | 'cm-color-bg-surface'
  | 'cm-color-bg-toolbar'
  | 'cm-color-text-primary'
  | 'cm-color-text-secondary'
  | 'cm-color-border'
  | 'cm-color-brand'
  | 'cm-color-brand-contrast'
  | 'cm-color-info'
  | 'cm-color-success'
  | 'cm-color-warning'
  | 'cm-color-danger';

export const cmEspacamento: Readonly<Record<TokenEspacamento, string>> = {
  'cm-space-1': '0.25rem',
  'cm-space-2': '0.5rem',
  'cm-space-3': '0.75rem',
  'cm-space-4': '1rem',
  'cm-space-5': '1.25rem',
  'cm-space-6': '1.5rem',
};

export const cmRaio: Readonly<Record<TokenRaio, string>> = {
  'cm-radius-sm': '0.5rem',
  'cm-radius-md': '0.75rem',
  'cm-radius-lg': '1rem',
};

export const cmCoresLight: Readonly<Record<TokenCor, string>> = {
  'cm-color-bg-page': '#f3f4f6',
  'cm-color-bg-surface': '#ffffff',
  'cm-color-bg-toolbar': '#005a52',
  'cm-color-text-primary': '#1f2937',
  'cm-color-text-secondary': '#5f6b7a',
  'cm-color-border': '#cfd6df',
  'cm-color-brand': '#00695f',
  'cm-color-brand-contrast': '#ffffff',
  'cm-color-info': '#1d4ed8',
  'cm-color-success': '#2e7d32',
  'cm-color-warning': '#b45309',
  'cm-color-danger': '#c62828',
};

export const cmCoresDark: Readonly<Record<TokenCor, string>> = {
  'cm-color-bg-page': '#0f1720',
  'cm-color-bg-surface': '#17212b',
  'cm-color-bg-toolbar': '#0b3f3a',
  'cm-color-text-primary': '#e5ecf3',
  'cm-color-text-secondary': '#a6b1bf',
  'cm-color-border': '#2f3b49',
  'cm-color-brand': '#2aa198',
  'cm-color-brand-contrast': '#08110f',
  'cm-color-info': '#60a5fa',
  'cm-color-success': '#4caf50',
  'cm-color-warning': '#f59e0b',
  'cm-color-danger': '#ef5350',
};
